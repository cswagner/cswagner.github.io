import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypeHighlight],
  },
})

const config = withMDX(nextConfig)

export default config
