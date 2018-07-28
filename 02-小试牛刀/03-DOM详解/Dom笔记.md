
```
javaScript由三部分组成:
ECMAscript(javaScript核心标准，也是一个解析器)
DOM(通过document提供的一些方法或者属性来操作页面)
BOM(通过window提供的一些方法或者属性来操作浏览器)

```

```
DOM : document Object Model
        文档 对象 模型
        整个页面文档

官方解释:
是W3c组织推荐的处理可扩展标志语言的标准编程接口，在网页上组织页面
(或文档)的对象被组织在一个树形结构中，用来表示文档中对象的标准模型
就称为DOM
简单点来说：
DOM通过document提供一些能够操作页面内容的属性或者方法，赋予开发者
操作页面的能力。
比如：document.getElementById('div1');



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