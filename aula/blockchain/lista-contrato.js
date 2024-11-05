const { Web3 } = require('web3');
const { abi } = require('./build/contracts/Transferencia.json')

const provider = new Web3.providers.HttpProvider('http://localhost:7545');
const web3 = new Web3(provider)

const contrato = new web3.eth.Contract(abi, '0x3A198349564862C1Dc9DFd367B26930F9d35D0bD');

async function executarTransacao(nomeOrigem, nomeDestino, valor) {

    const accounts = await web3.eth.getAccounts();

    try {
        return await contrato.methods.atualizarTransferencia(nomeOrigem, nomeDestino, valor)
            .send({ from: accounts[0], gas: 500000 });
    } catch (error) {
        return error;
    }
}

executarTransacao("edson", "maria", 100).then((resultado) => console.log(resultado));

