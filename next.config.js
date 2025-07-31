/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["md", "jsx", "js"],
  async rewrites() {
    return [
      {
        source: "/category/:id/feed",
        destination: "/api/rss-feed/feed?id=:id",
      },
      {
        source: "/home/:location/feed",
        destination: "/api/section-feed?location=:location",
      },
      {
        source: "/home/:location/sitemap.xml",
        destination: "/api/section-sitemap?location=:location",
      },
      {
        source: "/:slug/news/sitemap.xml",
        destination: "/api/single-category-news?slug=:slug",
      },
      {
        source: "/category-sitemap.xml",
        destination: "/api/category-sitemap",
      },
    ];
  },
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    domains: [
      "devapi.khabargaon.com",
      "api.khabargaon.com",
      "images.khabargaon.com",
      "devqa.newsarenaindia.com",
      "images.khabargaon.comscreenshot-20241015-at-21523pm-smalljpeg_1728981983959.jpeg",
      "theideazfactory.com",
      "centralapi.tiftechnologies.com",
      "dev2.tiftechnologies.com",
    ], // Add your image domains here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["svg-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
