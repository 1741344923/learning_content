    /**
 * Created by ZMM on 2018/3/23.
 */
    function doMove(obj, attr, dir, target,endFn) {

        dir = parseInt( getStyle(obj,attr))<target ? dir : -dir;

        clearInterval(obj.timer);

        obj.timer = setInterval(function () {

            var speed = parseInt(getStyle(obj, attr)) + dir;

            if (speed > target && dir > 0 || speed < target && dir < 0) { // 往前跑
                speed = target;
            }

            obj.style[attr] = speed + 'px';

            if (speed == target) {
                clearInterval(obj.timer);

                /*if ( endFn ){
                 endFn();
                 }*/

                endFn && endFn();
            }

        }, 30);
    }

    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }