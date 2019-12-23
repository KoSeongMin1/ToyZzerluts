var slide = $(".slide img");
var sno = 0;
var last = slide.length - 1;

$(".slide").on("click", function(){
    playSlider();
});

function playSlider(){
    if( $(slide[sno]).is(":animated") ) return;
    $( slide[sno] ).animate({
        left:"100%"
    },1000, function(){
        $(this).css({left:"-100%"});
    });
    sno = sno + 1;
    if( sno > last ) sno = 0;
    $( slide[sno] ).animate({
        left:"0"
    },1000);
};

var timer = setInterval(function(){
    playSlider();
},2000);
