const Meme = artifacts.require("Meme");
//const Meme = require("../src/abis/Meme.json")
module.exports = function(deployer) {
  deployer.deploy(Meme);
};
