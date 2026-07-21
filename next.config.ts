import type { NextConfig } from "next"

const repositoryName = "purple-martin-monitoring-app"
const isGitHubPages = process.env.GITHUB_ACTIONS === "true"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repositoryName}` : "",
  assetPrefix: isGitHubPages ? `/${repositoryName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repositoryName}` : "",
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
