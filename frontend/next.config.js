/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/notes?archived=false",
        permanent: true,
        locale: false
      },
    ];
  },
};

module.exports = nextConfig;
