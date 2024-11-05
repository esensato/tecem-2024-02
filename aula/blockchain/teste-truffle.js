const { Web3 } = require('web3');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider)

async function getPreviousBlock() {
    const latestBlock = await web3.eth.getBlock('latest');
    console.log('Bloco atual:', latestBlock.hash, latestBlock.number, latestBlock.parentHash);

    const previousBlock = await web3.eth.getBlock(latestBlock.number - BigInt(1));
    console.log('Bloco anterior:', previousBlock.hash, previousBlock.number, previousBlock.parentHash);

    const prevpreviousBlock = await web3.eth.getBlock(latestBlock.number - BigInt(2));
    console.log('Bloco anterior:', prevpreviousBlock.hash, prevpreviousBlock.number, prevpreviousBlock.parentHash);
}

getPreviousBlock().catch(console.error);