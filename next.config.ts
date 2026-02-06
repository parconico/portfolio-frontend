import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "d2v5dzhdg4zhx3.cloudfront.net",
      "portfolio-nparco.s3.us-east-2.amazonaws.com",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/backend/:path*",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
