/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        // source : "/old-blog/:path",
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false, //영구적인지(브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
