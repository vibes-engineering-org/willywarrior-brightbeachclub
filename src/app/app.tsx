"use client";

import { PROJECT_TITLE } from "~/lib/constants";
import { NFTMintFlow } from "~/components/nft-mint-flow";

export default function App() {
  return (
    <div className="w-[400px] mx-auto py-8 px-4 min-h-screen flex flex-col items-center justify-center">
      {/* TEMPLATE_CONTENT_START - Replace content below */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-900/50 dark:to-gray-800/30 rounded-2xl backdrop-blur-sm -z-5"></div>

        {/* Main content */}
        <div className="relative space-y-8 p-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mint NFT Collection
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Connect your wallet and mint in just two clicks
            </p>
          </div>

          {/* NFT Minting Flow */}
          <NFTMintFlow
            contractAddress="0x32dd0a7190b5bba94549a0d04659a9258f5b1387"
            tokenId="1"
            network="base"
            buttonText="Mint Now"
          />
        </div>
      </div>
      {/* TEMPLATE_CONTENT_END */}
    </div>
  );
}
