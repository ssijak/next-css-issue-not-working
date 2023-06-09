import  { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const config = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
};

const withVanillaExtract = createVanillaExtractPlugin()(config);
export default withVanillaExtract
