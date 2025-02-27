$(window).on('load', function () {
    setTimeout(function () {

        var callback = function () {
            $('.circle-play').css({opacity:"1", cursor:"pointer"});
        };
    });

});

function startFunction(){
    $('#text').fadeOut();
    $('.playlistButton').addClass('display');
    $(".bg-images").css("transform","translate(-2%,0)");
    $(".slider").css("transform","translate(0%,0)");

    $('.control').toggleClass('pause play-pause');

    $('.audio-files p:contains("1 პირველი სათაური")').addClass('active-title');
    if(audio.paused===true){
        audio.play();
        isPlaying = true;
    }
    else {
        audio.pause();
        isPlaying = false;
    }
    timing();

    setTimeout(function () {
        $('.mainId').fadeOut();
        $('#text').css({display:"none"});
        $('.Id1').addClass("active-Id");
    },1000);

    setTimeout(function () {
        $('.controll-buttons').css({display:"block"});
        $('.progress').css({display:"inline-block"});
        $('.time-counter').css({opacity:"1"});
        $('.sound-controll').css({display:"inline-block"});
        $('.circle-play').fadeOut();

        $(function indexing() {
            for(var i =0; i<audioArr.length; i++){
                if(audioArr[i].src==audio.src){
                    currIndex = i;
                }
            }
            if(currIndex+1<8){$('.currIndex').html("0" + (currIndex+1).toString())}
            else {$('.currIndex').html(currIndex+1);}
            if(audioArr.length<8){$('.whole-number').html("0" + audioArr.length);}
            else{$('.whole-number').html(audioArr.length);}
            timing();
        });

        $('.title').addClass('subtitle');
        $('.title').html("ერთადერთი თავშესაფარი - ძილი");
    },1000);

}

$('.circle-play').click(function () {
    startFunction();
});


$('.fb-share-button').click(function () {
   console.log(1);
});

$('.fb-share-button').mouseover(function () {
    $('.share-text p').css({opacity:"1"});
});

$('.fb-share-button').mouseout(function () {
    $('.share-text p').css({opacity:"0"});
});


$('.control').on('mousedown', function() {
    $(this).toggleClass('pause play-pause');
    if(audio.paused===true){
        audio.play();
        isPlaying = true;
    }
    else {
        audio.pause();
        isPlaying = false;
    }
    timing();

});

$(document).on('keyup', function(e) {
    if (e.which == 32) {
        $('.control').toggleClass('pause play-pause');
    }
});
