require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember pudding hope enter orange general'; 
let testAccounts = [
"0xf0473995ea9f48b77ac7e6df5f553c9eb5f6aef21f8696dfaf24b695ef815c01",
"0xc6d190b40452760b52f8e6db546ab38986967f8bb6b24625ed04e9529a914f33",
"0x58f629f9e5d34d1946a1b069a5dec7a581fbaceb3f3ab0673e5fc96edc341427",
"0x9b2d5b2b793d1c93340014d73152f218d1c7658294946c7ebdb654bb2c1b95cf",
"0x34cdd003d17a0f660e2680088f1b7955872fc9cfbaad42b943a8cefd5b43f74f",
"0xa9ff18b5956cc646cacd374b87b746790c4b451d33976b7a7bc9123ff62aff98",
"0x523c8b2de026331ff3cd5b8114bdafac95a12ae28fa13540acc2f161471db603",
"0x6171c4abb50a4df652dc11466828e1105c38c113a7badadc6bb119ec768257f5",
"0x13eb3c3dd41e6f0d9a7ee8e696aa47d405958c4fd7b74d68879d8aa55bf6eac4",
"0x4448c2405da72399aca42a51eb40db22de0162d553ce3f0c842b8cdeb3e6c601"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
