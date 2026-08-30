import type { NextConfig } from "next";
const CDN_PREFIX =
  process.env.CDN_PREFIX ??
  "http://static.xbase.cloud/file/35tlcfgsqfws0i4m8v8/xyd";
const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  output: "export",
  assetPrefix: CDN_PREFIX.replace(/\/$/, ""),
};

export default nextConfig;
