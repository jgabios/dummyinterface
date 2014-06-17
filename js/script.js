
// send button click handler - make a transaction

$('#sendbtn').on('click', function() {
    var sum = (1000000000000000000 * parseFloat(document.getElementById("value").value)) + '',
            destination = document.getElementById("destination").value;
    eth.transact(eth.key, sum, destination, eth.secretToAddress(destination).pad(32) + sum.pad(32), "10000", eth.gasPrice);
});

//ether == 1000000000000000000 wei

//show the address
$('.mywallet .coinbase').html(eth.coinbase);

// get the balance in ethers
$('.mywallet .balance').html(eth.balanceAt(eth.coinbase).dec() / 1000000000000000000);

// watch for changes in the wallet
eth.watch(eth.coinbase, eth.secretToAddress(eth.key), function() {
    $('.mywallet .balance').html(eth.balanceAt(eth.coinbase).dec() / 1000000000000000000);
});

// check the state of alethzero ethereum client
setInterval(function() {
    $('.mining span').text(eth.mining);
    $('.listening span').text(eth.listening);
}, 1000);