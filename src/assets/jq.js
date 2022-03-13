import $ from 'jquery'

$(document).ready(function () {
    var posX = 800;
    var posY = 800;
    $('.ship').css('left', posX);
    $('.ship').css('top', posY);
    window.addEventListener('keydown', function (event) {
        if (event.keyCode == 65) {
            posX -= 5;
            $('.ship').css('left', posX);
            $('.ship').addClass('left');
        } else if (event.keyCode == 68) {
            posX += 5;
            $('.ship').css('left', posX);
            $('.ship').addClass('right');
        } else if (event.keyCode == 87) {
            posY -= 5;
            $('.ship').css('top', posY);
            $('.ship').addClass('top');
        } else if (event.keyCode == 83) {
            posY += 5;
            $('.ship').css('top', posY);
            $('.ship').addClass('bottom');
        }
        if ($('.ship').hasClass('left') && $('.ship').hasClass('top')) {
            posX -= 5;
            posY -= 5;
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(-45deg)' });
        } else if ($('.ship').hasClass('right') && $('.ship').hasClass('top')) {
            posX += 5;
            posY -= 5;
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(45deg)' });
        } else if ($('.ship').hasClass('left') && $('.ship').hasClass('bottom')) {
            posX -= 5;
            posY += 5;
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(-135deg)' });
        } else if ($('.ship').hasClass('right') && $('.ship').hasClass('bottom')) {
            posX += 5;
            posY += 5;
            $('.ship').css({ 'top': posY, 'left': posX, 'transform': 'rotate(135deg)' });
        }
    });
    $('html').on('click', function() {
        $('.space').append('<img class="laser" style="top:' + posY +'px; left: ' + posX +'px" src="/img/laser.734ca55c.png">');
    });
    window.addEventListener('keyup', function (event) {
        $('.ship').removeClass('top left right bottom')
        $('.ship').css('transform', 'rotate(0)');
    });
})