import * as dotenv from 'dotenv';

dotenv.load({ path: '.env' });

const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");

const provider = new HDWalletProvider(
    process.env.WALLET_MNEMONIC, process.env.RINKEPY_INFURA
);

const web3 = new Web3(provider);

export default web3;
