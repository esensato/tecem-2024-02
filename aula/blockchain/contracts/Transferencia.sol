// SPDX-License-Identifier: GPL-3.0
pragma solidity =0.8.24;

contract Transferencia {
    
        string public nomeorigem;
        string public nomedestino;
        int public valor;

        constructor (string memory novonomeorigem, string memory novonomedstino, int novovalor) {

            nomeorigem = novonomeorigem;
            nomedestino = novonomedstino;
            valor = novovalor;

        }
        
        function setNomeOrigem(string memory novonomeorigem) public {

            nomeorigem = novonomeorigem;

        }

        function atualizarTransferencia(string memory novonomeorigem, string memory novonomedstino, int novovalor) public {
            nomeorigem = novonomeorigem;
            nomedestino = novonomedstino;
            valor = novovalor;
        }
}