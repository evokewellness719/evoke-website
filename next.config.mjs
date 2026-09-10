/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/apothecary", destination: "https://shopevoke.net/", permanent: true },
      { source: "/shop", destination: "https://shopevoke.net/", permanent: true },
    ];
  },
};

export default nextConfig;
