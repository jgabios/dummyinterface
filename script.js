$('.list').on('click', function(evt){
    $(this).data('origTop', $(this).css('top'));
    $(this).data('origLeft', $(this).css('left'));
    $(this).data('origHeight', $(this).css('height'));
    $(this).data('origWidth', $(this).css('width'));
    $(this).find('.closer').removeClass('hidden');
    $(this).css({'-webkit-transform': 'inherit', 'z-index': 2, 'opacity': '0.5'}).animate({
        height: '90%',
        width: '50%',
        left: '25%',
        top: '5%'
    }, function(){
        $(this).css('opacity', '');
    });
});

$('.closer').on('click', function(evt){
    var el = $(this).parent('.list');
    el.css({'-webkit-transform': '', 'z-index': '', 'opacity': '0.5'}).animate({
        height: el.data('origHeight'),
        width: el.data('origWidth'),
        left: el.data('origLeft'),
        top: el.data('origTop')
    }, function(){
        $(this).css('opacity', '');
    });
    $(this).addClass('hidden');
    evt.stopPropagation();
});

$('.mywallet .kid').draggable({
            cursor: "crosshair",
            opacity: 0.35,
            zIndex: 5,
            revert: "invalid",
            start: function(evt, ui){
                //$(this).appendTo($(document.body));
            }
});

$('.list1 .kid').droppable({
        accept: ".mywallet .kid",
        activeClass: "drop-highlight",
        hoverClass: "drophover-highlight",
        greedy: true,
        drop: function(evt, ui) {
            $(this).append(ui.draggable);
            ui.draggable.css({
                left: '5%',
                top: '5%',
                width: '90%',
                height: '90%'
            });
        }
    });
    var idx = 1;
    setInterval(function(){
        $('.status').append('<div class="row">transact ' + idx + ': ' + Math.random() + ' ETH</div>');
        idx++;
    }, 5000);

$('.mywallet .header').html(eth.coinbase);
$('.mywallet .balance').html(eth.balanceAt(eth.coinbase).dec() / 1000000000000000000);