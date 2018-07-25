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

```


```
                    初识DOM
一般分为三大关系:
父级关系: 只有一层上下级关系(从当前往上找)。
子级关系: 只有以下一层的关系。
兄弟关系: 同一个父级。

父子节点: 上下两层节点之间的关系。
祖先节点: 当前节点上面的所有节点的统称。
子孙节点: 当前节点下面的所有节点的统称。

按照节点的类型划分:
DOM的节点类型:

nodeType 查看某个节点是什么类型的

元素节点:
就是标签，数字1

文本节点: 数字3 文字 换行...

注释节点: 数字8

document 数字9

属性节点: 数字2

childNodes 获取某个元素下的所有子节点

nodeValue 查看节点的属性值

nodeName  查看节点的属性名


children 不是标准的属性，但是所有浏览器都支持
找到某个元素下的所有元素子节点

parentNode 查找某个元素的父节点

nextElementSibling 找到某个元素的下个兄弟节点

previousElementSibling 找到某个元素的上个兄弟节点


firstElementChild 某个元素下个第一个子节点

lastElementChild  某个元素下个最后一个子节点

offsetParent 最近的有定位属性的祖先节点

offsetLeft offsetTop 最近的有定位属性的祖先节点的距离
如果祖先节点都没有定位，那么默认为body

getBoundingClientRect()
获取元素的盒模型信息
返回值为一个对象
    left top bottom right width height
    相对于浏览器可视区域



getBoundingClientRect：（返回值为一个对象）
获取某个元素的信息：高版本 left top bottom right width height
注意: 获取的值是会根据滚动条变化的

元素的属性操作:
.getAttribute(attr)获取元素行间的属性

.setAttribute(attr,value) 设置元素的行间属性

.removeAttribute(attr) 删除元素的行间属性
特点：可以操作行间自定义的属性
可以获取src href等的相对地址


获取某个元素的宽高:
clientWidth
clientHeight
不计算边框，计算padding

offsetWidth
offsetHeight
计算边框,也计算padding   获取某个元素的宽高



可视区的宽高:
document.documentElement.clientWidth
document.documentElement.clientHeight


元素的操作:
document.createElement('标签的名字'); 创建元素

插入元素: (向父级末尾添加一个元素)
parentNode.appendChild(childNode)

插入元素: (向父级中的某个元素前插入元素)
parentNode.insertBefore(新添加的元素，已有的元素)



删除节点：
父级.removeChild(指定的子节点)
如果指定的子节点没有，那么会报错！（进行判断解决）


.replaceChild();	替换子节点。

元素.cloneNode() 克隆某个元素
注意: 在克隆的时候，默认(false)只克隆指定元素本身，不会克隆该元素下
的所有子节点，（cloneNode(有参数，默认为false)）,如果里面传入true
那么就可以克隆该元素下的所有子节点，事件是不会被克隆的。


操作表格:
table.tHead --- 获取表格头部
table.tFoot --- 获取表格底部
table.tBodies --- 获取表格主题(获取到的是一个集合)
table.rows --- 获取tr 获取的是行数(一组)
.rows[].cells 单元格 就是td

```