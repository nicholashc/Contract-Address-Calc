$('#addressForm').on('submit', function(e) {
    e.preventDefault(); // cancel the actual submit

    var Web3 = require("web3")
	var web3 = new Web3()
	var RLP = require('rlp');  
	var nonce = $('#nonceInput').val();
	var sender = $('#addressInput').val();
	var nonceHex = parseInt(nonce);

	var contractAddress = web3.utils.sha3(RLP.encode([sender, nonceHex])).slice(12).substring(14)

	$('#contractAddress').text('0x' + contractAddress);
});


			