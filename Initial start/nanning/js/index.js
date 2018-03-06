/**
 * Created by Administrator on 2016/12/16.
 */
$(function () {
    $(".Big_bkg .bd ul li").on("mouseenter",function () {
        $(this)
            .addClass("on")
            .siblings()
            .removeClass('on');

        var index =$(this).index();
        $(".Big_bkg .hd ul li")
            .eq(index)
            .addClass("on")
            .siblings()
            .removeClass("on");
    });

    $(".classic-case .hd ul li").on("mouseenter",function () {
        $(this)
            .addClass("on")
            .siblings()
            .removeClass("on");

        var index =$(this).index();
        $(".classic-case .bd>ul")
            .eq(index)
            .addClass("on")
            .siblings()
            .removeClass("on");
    });

    $(".GongYI1 .hd ul li").on("mouseenter",function () {
        $(this)
            .addClass("on")
            .siblings()
            .removeClass("on");

        var index = $(this).index();
        $(".GongYI1 .bd div.boDy")
            .eq(index)
            .addClass("on")
            .siblings()
            .removeClass("on");
    });

    $(".Unit .hd ul li").on("mouseenter",function () {
        $(this)
            .addClass("on")
            .siblings()
            .removeClass("on");

        var index = $(this).index();
        $(".Unit .bd .jDu")
            .eq(index)
            .addClass("on")
            .siblings()
            .removeClass("on");
    });
});

window.onload = function () {

};