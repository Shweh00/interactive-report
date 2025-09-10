/** @type {import('next').NextConfig} */
const nextConfig = {
  // 构建时导出纯静态网站到 out/
  output: 'export',
  // 如果以后用 next/image，这句能避免导出时报错
  images: { unoptimized: true }
};
module.exports = nextConfig;
