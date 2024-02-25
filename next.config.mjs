/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';


const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    typedRoutes: false,
    mdxRs: true
  }
};

export default withMDX()(nextConfig);
