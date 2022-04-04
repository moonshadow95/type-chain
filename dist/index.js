"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};
const genesisBlock = new Block(0, "202020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => getBlockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimestamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    return new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
};
console.log(createNewBlock('hello'), createNewBlock('bye bye'));
