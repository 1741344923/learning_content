```
            javaScript 基础部分
js实现原理：
写一个js效果的步骤:
1、先实现布局
2、实现原理
3、了解js语法

希望把某个元素移除你的视线：
1、display: none; 显示为无
2、visibility: hidden;  隐藏
3、width / height
4、透明度
5、left / top
6、拿一个白色的div盖住它
7、margin负值
......


js中如何获取元素：
1、通过ID名称来获取元素
    document get element by id
    document.getElementById();

事件：鼠标事件 键盘事件 系统事件 表单事件 自定义事件......

onclick 点击事件
onmouseover 鼠标移入事件
onmouseut   鼠标移开事件
onmousemove 鼠标移动事件
onmousedown 鼠标按下的时候触发该事件
onmouseup   鼠标抬起的时候触发该事件
onkeydown   用户按下键盘按键
......

onload --- 加载完以后执行
window.onload = 事情
img.onload
body.onload


如何添加事件：
元素.onmouseover


函数: 可以理解为-命令，做一些事
function abc (){}  // 不会主动执行的！

1、直接调用 abc()
2、事件调用 元素.事件 = 函数名 div.onclick = abc;

function () {} 匿名函数

测试：alert(1); 带一个确定按钮的警告框！！！
     alert('ok'); 'ok' 字符串


变量：
var li = document.getElementById();
var num = 123;
var name = 'leo';


HTML属性操作: 读 写
    属性名
    属性值

属性读操作: 获取 找到
元素.属性名

属性写操作：(添加)替换 修改
元素.属性名 = 新的值

字符串链接：

innerHTML           读取标签中间的所有HTML代码
innerHTML = 新的值   替换标签中间的HTML内容

a = a+b === a+=b;

JS中不允许出现 -
font-size === fontSize

class 保留字 class => className
关键字：var function

所有的相对路径都别拿来做判断！！！
颜色值也别拿来做判断！！！
innerHTML的值别拿来做判断！！！
img src
href

技术上：必须能做到掌握兼容性(兼容性问题的解决方案)

.后面的值无法修改  ['']
js中允许.替换成[]

判断
if(){

}

if(){

}else{

}

if(){

}else if(){

}else if(){

}else if(){

}else{

}

布尔值: true  真  1
       false 假  0


.push() 往数组的最后一位添加数据

获取元素的第二种方法：
getElementsByTagName[] 获取的是一个元素的集合,可以得到它的长度



for循环
重复执行某些代码
每次执行的时候有个数字在变化


this
alert(this)  object window 对象 窗口

js可以动态的为任意一个HTML元素添加自定义属性


思路一: 全部清空，当前添加
思路二：清空上个，当前添加


```

```
            JS的数据类型
ECMAScript: 标准 核心
HTML标签类型: block inline inline-block table...
JS中的数据类型：数字、字符串、布尔值、对象、未定义

            number      数字
            string      字符串 (可以获取字符串的长度 注意：不能敲空格)
            true false  布尔值 boolean
            function    函数
            object (window document [] {} null )
            undefined 未定义

typeof 判断数据类型
charAt(2); 找到字符串中的某个字符串
push(); 往数组的末尾添加内容
Number(); 函数把对象的值转换为数字,空的字符串会转换出来一个数字0
布尔值 true-1 false-0
[] 空数组转出来的也是0
null 转换 0


函数转换不了--NaN
{} 转不了
未定义 转不了


parseInt()    从左往右，不是数字后面的统统截取掉
parseFloat()  认识一个小数点

Number()
parseInt()
parseFloat() 显示类型转换 强制类型转换

隐式类型转换:

 +          200 + '3' === 2003 变成字符串
- * / %     '200' - 3 === 197 变成数字
++ --       变成数字
> <         数字的比较还是字符串的比较
字符串与字符串比较，比较的是第一位数字
！取反 把右边的数据类型转换成布尔值
==


NaN  not a number 不是个 数字 的 数字类型
isNaN is not a number 是不是不是一个数字(不是数字)
isNaN()  true false
// 判断某些值是不是数字
// 不喜欢数字、讨厌数字


函数传递参数
参数 = JS的数据类型
数字 字符串 布尔  函数 对象 未定义


JS中的作用 域
域 ： 空间、区域、范围......
作用: 读、写


return 返回值
1、函数名+括号 fn1()就等于return后面的值
2、所有函数默认返回值 : 未定义
3、return 后面任何代码都不执行了



```



