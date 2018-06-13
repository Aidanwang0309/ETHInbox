const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
  'case avocado hamster silver matter fade client design token cram transfer border'
  ,'https://rinkeby.infura.io/pHSJaeK0MUU3IJe2Lyov '
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('attempting to deploy', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments:['Hi There'] })
    .send({ gas: '1000000', from:accounts[0] });

    console.log('contract deployed to', result.options.address);
};
deploy();
