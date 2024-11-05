// indicar o nome do contrato criado na pasta contracts
const Transferencia = artifacts.require('Transferencia');

module.exports = function (_deployer) {
  _deployer.deploy(Transferencia, "Pedro", "Jose", 100);
};