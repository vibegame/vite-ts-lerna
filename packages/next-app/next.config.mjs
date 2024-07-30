import createBA from "@next/bundle-analyzer";

const withBA = createBA({ enabled: process.env.ANALYZE === "true" });

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBA(nextConfig);
