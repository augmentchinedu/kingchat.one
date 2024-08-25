const axios = require("axios");
const services = require("../classes/services");
const books = require("../classes/books");

async function getReportFromLatestCommit() {
  const { Octokit } = await import("@octokit/rest");

  const kingchat = new Octokit({ auth: process.env.GITHUB_TOKEN_KINGCHAT });

  const kingchatone = new Octokit({
    auth: process.env.GITHUB_TOKEN_KINGCHATONE,
  });

  try {
    let frontendData = await kingchat.repos.listCommits({
      owner: "genesiskrane",
      repo: "kingchat",
      sha: "main",
      per_page: 1,
    });

    let backendData = await kingchatone.repos.listCommits({
      owner: "augmentchinedu",
      repo: "kingchat.one",
      sha: "main",
      per_page: 1,
    });

    console.log();
    const client = frontendData.data[0];
    const server = backendData.data[0];

    const reports = [
      {
        committer: client.commit.author.name,
        message: client.commit.message,
        time: client.commit.author.date,
        avatar: client.committer.avatar_url,
        type: "Client App",
      },
      {
        committer: server.commit.author.name,
        message: server.commit.message,
        time: server.commit.author.date,
        avatar: server.committer.avatar_url,
        type: "Main Server",
      },
    ];
    return reports;
  } catch (err) {
    console.error(err);
  }
}

async function sendReportToDiscord(reports) {
  const webhookURL = process.env.DISCORD_WEBHOOK;

  // eslint-disable-next-line no-unused-vars
  for (let report of Object.entries(reports).map(([key, value]) => value)) {
    const message = {
      username: "GitHub Errand Girl",
      avatar_url:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", // Optional: Set an avatar for the webhook
      content: "App Update Report", // Main message content
      embeds: [
        {
          title: "New Version Deployed",
          // description: "This is an embedded message with additional info",
          color: 32768, // Red color (optional)
          fields: [
            {
              name: `${report.type} Modified`,
              value: `Time: ${report.time}\n \nMessage: ${report.message}`,
              inline: true,
            },
          ],
          footer: {
            text: report.committer,
            icon_url: report.avatar, // Optional footer icon
          },
        },
      ],
    };

    axios.post(webhookURL, message).catch((error) => {
      console.error("Error sending message: ", error);
    });
  }
}

async function init() {
  const reports = await getReportFromLatestCommit();

  const enviroment = process.env.NODE_ENV;
  if (enviroment !== "development") sendReportToDiscord(reports);

  await services.init();
  await books.init();
}
module.exports = { init };
