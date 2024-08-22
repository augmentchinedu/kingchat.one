const services = require("../classes/services");
const books = require("../classes/books");
async function init() {
  const { Octokit } = await import("octokit");

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: process.env.REPO_OWNER,
    repo: "kingchat.one",
  });
  console.log("git connected");
  await services.init();
  await books.init();
}

module.exports = { init };
