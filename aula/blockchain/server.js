const express = require('express');
const { Web3 } = require('web3');
const { abi } = require('./build/contracts/Transferencia.json')
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

// Configuração do Web3 com o Ganache (ou endereço RPC)
const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider)
// Carregar ABI e endereço do contrato
const contratoEndereco = '0x0dEE98Be2275F4CA9C242e6383B8BDaf10429045'; // Substitua pelo endereço do contrato implantado

const contrato = new web3.eth.Contract(abi, contratoEndereco);


// Rota para obter os dados do contrato
app.get('/dados', async (req, res) => {
    try {

        contrato.defaultBlock = 2;

        const nomeOrigem = await contrato.methods.nomeorigem().call(blockNumber = 100000);
        const nomeDestino = await contrato.methods.nomedestino().call();
        const valor = await contrato.methods.valor().call();
        res.json({ nomeOrigem, nomeDestino, valor: valor.toString() });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error)
    }
});

// Rota para atualizar os dados do contrato
app.post('/atualizar', express.json(), async (req, res) => {
    const { nomeOrigem, nomeDestino, valor } = req.body;
    const accounts = await web3.eth.getAccounts();

    try {
        await contrato.methods.atualizarTransferencia(nomeOrigem, nomeDestino, valor)
            .send({ from: accounts[0], gas: 500000 });
        res.json({ message: 'Contrato atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});