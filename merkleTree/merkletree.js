const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddress = [
  "0xe0b66F4550C5aa4dc4dF333529Ce4932389d1d36",
  "0xa809E1813a980cF9Bd0E1Dd8f76214d8C9F20067"
]

const leafNodes = whitelistAddress.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

const rootHash = merkleTree.getRoot().toString('hex');
console.log('rootHash: ', rootHash);

console.log('Whitelist Merkle Tree\n', merkleTree.toString());

const claimAddress = leafNodes[0];

const hexProof = merkleTree.getHexProof(claimAddress);
console.log('hexProof: ', hexProof);