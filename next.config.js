import createMDX from '@next/mdx'

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({})

const config = withMDX(nextConfig)

export default config
