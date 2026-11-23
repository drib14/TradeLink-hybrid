import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@tradelink/contracts', '@tradelink/design-tokens'],
};

export default nextConfig;
