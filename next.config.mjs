/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';


const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    typedRoutes: false,
    mdxRs: true
  },
  redirects: async () => {
    return [
      {
        source: '/products/t-shirts',
        destination: '/products/t-shirts/1',
        permanent: false,
      },
    ];
  }
};

export default withMDX()(nextConfig);
