async function init() {
  const { Octokit } = await import("octokit");

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: process.env.REPO_OWNER,
    repo: "kingchat.one",
  });
  console.log(data);
}

module.exports = { init };
