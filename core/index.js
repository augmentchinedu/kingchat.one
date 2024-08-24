const services = require("../classes/services");
const books = require("../classes/books");
const { Server } = require("ws");

async function getReportFromLatestCommit() {
  const { Octokit } = await import("@octokit/rest");

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  try {
    const { frontendData } = await octokit.repos.listCommits({
      owner: process.env.REPO_OWNER,
      repo: "kingchat",
      sha: "main",
      per_page: 1,
    });

    const { backendData } = await octokit.repos.listCommits({
      owner: process.env.REPO_OWNER,
      repo: "kingchat.one",
      sha: "main",
      per_page: 1,
    });
    const client = frontendData[0];
    const server = backendData[0];

    const report = {
      client: {
        committer: client.commit.author.name,
        message: client.commit.message,
        time: client.commit.author.date,
      },
      server: {
        committer: server.commit.author.name,
        message: server.commit.message,
        time: server.commit.author.date,
      },
    };
    return report;
  } catch (err) {
    console.error(err);
  }
}

async function sendReportToDiscord(report) {
  console.log(process.env.NODE_ENV, report);
}

async function init() {
  const report = await getReportFromLatestCommit();

  sendReportToDiscord(report);
  await services.init();
  await books.init();
}
module.exports = { init };
