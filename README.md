# EthereumToken-

 Kevin Luna 
 Blockchain Applications
 
 # Getting started
 First, a quick installation of truffle is needed. Type this in terminal
 - Step 1. npm -g install truffle
 - Step 2. truffle compile 
 - Step 3. truffle develop
 
 # Example Run.
 `truffle(develop)> Token.Deployed("Example Token Name", "EXM", 18).then((t) {token = t;})`
 
 # Transaction 1,
  `truffle(develop)> sale.buyTokens(web3.eth.accounts[1], {value : new web3.BigNumber(web3.toWei(2.5, 'ether')) , from : web3.eth.accounts[1]});`
