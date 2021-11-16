(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{450:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Redis的基本数据结构和底层实现")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_40378034/article/details/89295462",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考@邋遢的流浪剑客"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"基本数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据结构"}},[s._v("#")]),s._v(" 基本数据结构")]),s._v(" "),a("p",[s._v("Redis键值对都是由对象组成的。键总是一个字符串对象，而值可以是字符串对象、链表对象、哈希对象、集合对象、有序集合对象这五种对象中的其中之一。")]),s._v(" "),a("h2",{attrs:{id:"字符串-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串-string"}},[s._v("#")]),s._v(" 字符串（string）")]),s._v(" "),a("p",[s._v("Redis使用的是一种 简单动态字符串（SDS）的数据结构，如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("struct sdshdr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("        \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录buf数组中已使用字节的数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 等于SDS所保存字符串的长度")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录buf数组中未使用字节的数量")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字节数组，用于保存字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这样做的好处有 个：")]),s._v(" "),a("ul",[a("li",[s._v("常数复杂度获取字符串长度")]),s._v(" "),a("li",[s._v("杜绝缓存区溢出")]),s._v(" "),a("li",[s._v("减少修改字符串时带来的内存重分配次数")]),s._v(" "),a("li",[s._v("二进制安全")]),s._v(" "),a("li",[s._v("兼容部分C字符串函数")])]),s._v(" "),a("h2",{attrs:{id:"链表-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表-list"}},[s._v("#")]),s._v(" 链表（list）")]),s._v(" "),a("p",[s._v("双向无环链表")]),s._v(" "),a("p",[s._v("节点：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typedef struct listNode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 前置节点")]),s._v("\n\tstruct listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后置节点")]),s._v("\n\tstruct listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节点的值")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("listNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("指向链表的结构：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typedef struct list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表头节点")]),s._v("\n\tlistNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 表尾节点")]),s._v("\n    listNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 链表所包含的节点数量")]),s._v("\n    unsigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节点值复制函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("dup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节点值释放函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 节点值对比函数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"哈希-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希-hash"}},[s._v("#")]),s._v(" 哈希（hash）")]),s._v(" "),a("p",[s._v("哈希的底层实现是字典（一种用于保存键值对的抽象数据结构），同时字典也是Redis数据库的底层实现。")]),s._v(" "),a("p",[s._v("而字典使用哈希表作为底层实现：")]),s._v(" "),a("p",[s._v("哈希表：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typedef struct dictht "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哈希表数组")]),s._v("\n\tdictEntry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哈希表大小")]),s._v("\n\tunsigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哈希表大小掩码，用于计算索引值")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 总是等于size-1")]),s._v("\n\tunsigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" sizemask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该哈希表已有节点的数量")]),s._v("\n\tunsigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" used"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("dictht"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("节点：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typeof struct dictEntry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 键")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 值")]),s._v("\n\tunion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tuint64_t u64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tint64_t s64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指向下个哈希表节点，形成链表")]),s._v("\n\tstruct dictEntry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("dictEntry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("字典：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typedef struct dict "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型特定函数")]),s._v("\n    dictType "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 私有数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("privedata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 哈希表")]),s._v("\n    dictht  ht"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rehash 索引")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在rehash不在进行时，值为-1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" trehashidx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("其中：")]),s._v(" "),a("ul",[a("li",[s._v("type属性是一个指向dictType结构的指针，每个dictType结构保存了一组用于操作特定类型键值对的函数，Redis会为用途不同的字典设置不同类型的函数")]),s._v(" "),a("li",[s._v("privedata属性保存了需要传给那些类型特定函数的可选参数")]),s._v(" "),a("li",[s._v("ht属性是一个包含两个项的数组，数组中的每个项都是一个dictht哈希表，一般情况下，字典只使用ht[0]哈希表，ht[1]哈希表只会在对ht[0]进行rehash时使用")]),s._v(" "),a("li",[s._v("trehashidx属性记录了rehash目前的进度，如果目前没有进行rehash，那么它的值为-1")])]),s._v(" "),a("p",[s._v("下面是字典的结构图（没有进行rehash）：")]),s._v(" "),a("img",{staticStyle:{zoom:"90%"},attrs:{src:"https://img-blog.csdnimg.cn/20190414132107747.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMzc4MDM0,size_16,color_FFFFFF,t_70",alt:"字典"}}),s._v(" "),a("h3",{attrs:{id:"哈希算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希算法"}},[s._v("#")]),s._v(" 哈希算法")]),s._v(" "),a("p",[s._v("Redis使用Murmurhash2算法来计算键的哈希值，这种算法的优点在于，即使输入的键是有规律的，算法仍能给出很好的随机分布性，并且计算速度也非常快。")]),s._v(" "),a("p",[a("strong",[s._v("解决键冲突")]),s._v("：使用前插法，使得插入复杂度为O(1)")]),s._v(" "),a("p",[a("strong",[s._v("rehash")]),s._v(":")]),s._v(" "),a("ul",[a("li",[s._v("如果执行的是扩展操作，那么ht[1]的大小为第一个大于等于ht[0].used * 2的2的n次方")]),s._v(" "),a("li",[s._v("如果执行的是收缩操作，那么ht[1]的大小为第一个大于等于ht[0].used的2的n次方")]),s._v(" "),a("li",[s._v("ht[0]中的键值对重新计算哈希值和索引值放置到ht[1]中，然后ht[1]变为ht[0]")])]),s._v(" "),a("p",[s._v("扩展的时机：")]),s._v(" "),a("ul",[a("li",[s._v("服务器目前没有在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于1")]),s._v(" "),a("li",[s._v("服务器目前正在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于5")])]),s._v(" "),a("p",[s._v("负载因子计算：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 负载因子=哈希表已保存节点数量/哈希表大小\nload_factor = ht[0].used / ht[0].size\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("收缩时机：")]),s._v(" "),a("ul",[a("li",[s._v("当负载因子小于0.1时，自动开始收缩操作")])]),s._v(" "),a("p",[s._v("同时，为了避免rehash对服务器性能造成影响，服务器不是一次性将ht[0]里面的所有键值对全部rehash到ht[1]，而是分多次、渐进式地将ht[0]里面的键值对慢慢地rehash到ht[1]。")]),s._v(" "),a("h2",{attrs:{id:"跳跃表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表"}},[s._v("#")]),s._v(" 跳跃表**")]),s._v(" "),a("p",[s._v("跳跃表是一种有序数据结构，它通过在每个节点中维持多个指向其他节点的指针，从而达到快速访问节点的目的")]),s._v(" "),a("p",[s._v("跳跃表支持平均O(logn)、最坏O(N)复杂度的节点查找，还可以通过顺序性操作来批量处理节点")]),s._v(" "),a("p",[s._v("Redis使用跳跃表作为有序集合键的底层实现之一，如果一个有序集合包含的元素数量比较多，又或者有序集合中元素的成员是比较长的字符串时，Redis就会使用跳跃表来作为有序集合键的底层实现")]),s._v(" "),a("p",[s._v("Redis只在两个地方用到了跳跃表，一个是实现有序集合键，另一个是在集群节点中用作内部数据结构")]),s._v(" "),a("h2",{attrs:{id:"集合-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集合-set"}},[s._v("#")]),s._v(" 集合（set）")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("typedef struct intset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编码方式")]),s._v("\n    uint32_t enconding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 集合包含的元素数量")]),s._v("\n\tuint32_t length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存元素的数组    ")]),s._v("\n\tint8_t contents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("intset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("整数集合按值的大小从小到大排序，保证数组中不会有重复的项。可以保存类型为int16_t、int32_t、int64_t的整数值。"),a("strong",[s._v("升级")]),s._v("是指当要存的数据类型比数组中所有的类型都要大时，要将所有的类型升级为要存的数据类型，从后往前升级，不能降级。")]),s._v(" "),a("h2",{attrs:{id:"有序集合-zset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序集合-zset"}},[s._v("#")]),s._v(" 有序集合（zset）")])])}),[],!1,null,null,null);t.default=e.exports}}]);