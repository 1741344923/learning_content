/**
 * Created by Administrator on 2017/5/2.
 */
$(function () {

    TouchSlide({
        slideCell:"#member",
        titCell:'.hd li',
        mainCell:'.bd',
        prevCell:'.mb-left',
        nextCell:'.mb-right',
        effect:'leftLoop',
        autoPlay:true,
        interTime:6000
    });
});