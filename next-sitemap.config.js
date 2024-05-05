/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || '<https://sensation-kizomba.fr/>',
  generateRobotsTxt: true, // optional
  sitemapDir: 'public',
  sitemapSize: 5000,
};
