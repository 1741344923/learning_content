console.log(TouchSlide,999);
$(function () {

    console.log(TouchSlide);

    TouchSlide({
        slideCell:"#introduce",
        titCell:'.hb li',
        mainCell:'.tm',
        prevCell:'.lf',
        nextCell:'.rg',
        effect:'leftLoop',
        autoPlay:true,
        interTime:6000
    });



});