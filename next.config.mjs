/** @type {import('next').NextConfig} */
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  sassOptions: {
    // @import 사용 시 styles 폴더를 기본으로 설정
    includePaths: [path.join(__dirname, "styles")],
    // 매번 가져올 파일 추가
    prependData: `@import "styles/globals.scss";`,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "s3 도메인 추가 예정",
  //     },
  //   ],
  // },
};

export default nextConfig;
