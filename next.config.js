/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = '/'
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = ''
  basePath = ''
}

module.exports = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'akamai',
    path: '',
  },
}
