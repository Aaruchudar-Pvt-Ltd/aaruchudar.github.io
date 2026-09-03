import { copyFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ghpages from "gh-pages";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

function run(command, args, extraEnv = {}) {
  const result = spawnSync(command, args, {
    cwd: rootDir,
    stdio: "inherit",
    env: { ...process.env, ...extraEnv },
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function git(args) {
  const result = spawnSync("git", args, {
    cwd: rootDir,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || `git ${args.join(" ")} failed`);
  }
  return (result.stdout || "").trim();
}

function parseGithubRemote(remoteUrl) {
  const ssh = remoteUrl.match(/git@github\.com:([^/]+)\/(.+?)(?:\.git)?$/);
  const https = remoteUrl.match(/github\.com\/([^/]+)\/(.+?)(?:\.git)?$/);
  const match = ssh || https;
  if (!match) {
    throw new Error(`Could not parse GitHub remote: ${remoteUrl}`);
  }
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

const remoteUrl = git(["remote", "get-url", "origin"]);
const { owner, repo } = parseGithubRemote(remoteUrl);
const isUserOrOrgSite = repo.toLowerCase() === `${owner}.github.io`.toLowerCase();
const basePath = isUserOrOrgSite ? "/" : `/${repo}/`;
const siteUrl = isUserOrOrgSite
  ? `https://${owner}.github.io/`
  : `https://${owner}.github.io/${repo}/`;

console.log(`Deploying ${owner}/${repo}`);
console.log(`Vite base: ${basePath}`);

run("npm", ["run", "build"], { VITE_BASE_PATH: basePath });
copyFileSync(path.join(distDir, "index.html"), path.join(distDir, "404.html"));
writeFileSync(path.join(distDir, ".nojekyll"), "");

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const publishOptions = {
  branch: "gh-pages",
  dotfiles: true,
  message: "Deploy static site to GitHub Pages",
};

if (token) {
  publishOptions.repo = `https://x-access-token:${token}@github.com/${owner}/${repo}.git`;
  publishOptions.user = {
    name: "github-actions[bot]",
    email: "github-actions[bot]@users.noreply.github.com",
  };
}

await new Promise((resolve, reject) => {
  ghpages.publish(distDir, publishOptions, (error) => {
    if (error) reject(error);
    else resolve();
  });
});

console.log(`Published to gh-pages: ${siteUrl}`);
console.log(
  "If the site 404s, set Pages source to the gh-pages branch in repository Settings → Pages.",
);
