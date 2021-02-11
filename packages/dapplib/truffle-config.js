require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture street crawl maze comic give nature swallow gasp'; 
let testAccounts = [
"0x488a746ba938ba7d2c86237b339c79e99eff251ca5a9e9295bf375b09b7020c2",
"0xef6a1c59b82b5af583a6a6da6746fae75aaca4cfc29afb27d98b23dbbd4e52b1",
"0x163cec61f28d1fcb2e5cfbc671172355e53c8bc220390ab64a8b842a302532e6",
"0x581ea4fd803d260d633101dc49415b2c72b7f6b6a7491c0181e5710205ef7e74",
"0xe50c740977e3a3e534b98e8ea0943c9eb6fc4741a8daaeec00d516118e282189",
"0x8dde4727f3e0b50be6132a7c49d208262e2e07bff271c7427835fac01fa6764d",
"0x0107ac50034940326010a34ede158a518c95b02ed294b247e6bbcb1f14340391",
"0xbb600d230e19cacf73bbdeff40438db450e1c64705d8ad8abaec93af2a76bee1",
"0xba706450607e74a394b498e38beb632b98a74ece1b2e97893efbc4c3e4d010cb",
"0x79eb9b168afcd85c0c2b58840af648d9eecab3dc0392e3a378fd2711aa1dc055"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
