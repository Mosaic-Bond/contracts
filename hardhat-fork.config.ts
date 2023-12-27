import hardhatConfig from "./hardhat.config"

import dotenv from 'dotenv';
dotenv.config();

export default {
    ...hardhatConfig,
    networks: {
        ...hardhatConfig.networks,
        hardhat: {
            // forking: {
            //     url: "https://rpc.testnet.mantle.xyz",
            //     blockNumber: 16328662
            // },
            // chainId: 5001
            forking: {
                url: "https://rpc.mantle.xyz",
                // blockNumber: 17761543
            },
            chainId: 5000
        },
    },
}