require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `${import.meta.env.URL}`,
      accounts: [`${import.meta.env.PRIVATE_KEY}`]
    }
  }
};
