<a name="izbxh"></a>
# Mustache语法（插值语法）
Vue也支持jsx的开发模式：

- 但是大多数情况下，使用**基于HTML的模板语法**
- 在模板中，允许开发者以声明式的方式将**DOM**和**底层组件实例的数据**绑定在一起
- 在底层的实现中，Vue将**模板**编译成**虚拟DOM渲染函数**

如果我们希望把数据显示到模板中，使用最多的就是插值语法

- **data返回的对象**是由添加到**Vue的响应式系统**中。
- 当**data中的数据发生改变**时，**对应的内容也会发生更新。**
- 当然，Mustache不仅仅可以是data中的属性，也可以是一个**JavaScript的表达式**。

基本使用：`{{message}}`<br />表达式：`{{count * 2}}``{{info.split("")}}`<br />三元运算符：`{{age > 18 ? "成年啦": "未成年呢"}}`<br />调用methods中的函数`{{ function() }}`
<a name="GnRfg"></a>
# 常见的基本指令

1. `v-once`用于指定元素或组件只渲染一次
2. `v-text`用于更新元素的textContent
3. `v-html`用于解析内容本身是html的
4. `v-pre`跳过元素和它的子元素的编译过程，显示原始的Mustache标签内容，不进行插值语法的解析
5. `v-cloak`将原始元素隐藏起来（配合display：none使用）
<a name="GTb71"></a>
# v-bind绑定属性
<a name="tMKP7"></a>
# 绑定class和style
<a name="zuKtr"></a>
# v-on绑定事件
<a name="RJw1R"></a>
# Vue的条件渲染
