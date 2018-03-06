/**
 * Created by Administrator on 2017/5/27.
 */
window.onload = function () {
    // jQuery(".finite").slide({
    //     titCell:'.hd dl',
    //     mainCell:".bd",
    //     trigger:'click',
    //     effect:'fold',
    //     autoPlay:true
    // });

    var aBtn = document.querySelectorAll('.finite .hd dl');
    var aBox = document.querySelectorAll('.finite .bd .box');
    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            for (var i = 0; i < aBtn.length; i++) {
                aBtn[i].className = '';
                aBox[i].className = 'box';
            }
            aBtn[this.index].className = 'on';
            aBox[this.index].className = 'box on';
        }
    }




    jQuery(".first").slide({
        titCell: ".hd ul",
        mainCell: ".first_li ul",
        effect: "leftLoop",
        autoPlay: true,
        vis: 4
    });



     var oly = document.getElementById('ly');

     setTimeout(function () {
        oly.className = 'layer block';
     },1000);

    oly.onclick = function () {
        oly.className = 'layer';
        setTimeout(function () {
            oly.className = 'layer block';
        }, 2000);
    }
};