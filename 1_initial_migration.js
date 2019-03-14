var Migrations = artifacts.require("Migrations");
var HelloEthSalon = artifacts.require('./HelloEthSalon.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloEthSalon);
};
