
//    var idx = 1;
//    setInterval(function(){
//        $('.status').append('<div class="row">transact ' + idx + ': ' + Math.random() + ' ETH</div>');
//        idx++;
//    }, 5000);
/*
$.jsonRPC.setup({
  endPoint: 'http://lb-dev-ethjsonrpc-888151941.eu-west-1.elb.amazonaws.com'
});
var myown = {
    
    };
    
function rpc(method, params, func){
    $.jsonRPC.request(method, {
      params: params,
      success: func,
      error: function(result) {
        alert(result);
      }
    });
}

rpc('coinbase', null, function(result) {
    $('.coinbase').html(result.result);
    myown.coinbase = result.result;
//    rpc('balanceAt', {"a": result.result}, function(x){
//        $('.balance').html(x.result.dec()/1000000000000000000);
//    });
});

//    rpc('key', null, function(x){
//        myown.key = x.result;
//    });
*/
$('#checkBalance').on('click', function(){
//    rpc('balanceAt', {"a": $.trim($('.yourwallet input').val())}, function(x){
//        $('.yourbalance').html(x.result.dec()/1000000000000000000);
//    });
//    rpc('transact', {
//         "sec" : myown.key,
//         "xValue" : "22".pad(32),
//         "aDest" : "b21b4388711f5fb646d835956596c3026ac743ac".pad(32),
//         "bData" : ("b21b4388711f5fb646d835956596c3026ac743ac".pad(32) + "22".pad(32)).unbin(),
//         "xGas" : "10000000",
//         "xGasPrice" : "250"
//    }, function(x){
//        debugger;
//    });
var sum = (1000000000000000000 * parseFloat(document.getElementById("value").value)) + '',
      destination = document.getElementById("destination").value;
    eth.transact(eth.key, sum, destination, eth.secretToAddress(destination).pad(32) + sum.pad(32), "10000", eth.gasPrice)
    });

$('.mywallet .coinbase').html(eth.coinbase);
$('.mywallet .balance').html(eth.balanceAt(eth.coinbase).dec() / 1000000000000000000);

eth.watch(eth.coinbase, eth.secretToAddress(eth.key), function(){
    $('.mywallet .balance').html(eth.balanceAt(eth.coinbase).dec() / 1000000000000000000);
});
