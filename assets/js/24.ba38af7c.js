(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{389:function(t,v,_){"use strict";_.r(v);var a=_(45),d=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"日历-calendar"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日历-calendar"}},[t._v("#")]),t._v(" 日历 Calendar")]),t._v(" "),_("p",[t._v("用于日历选择的组件")]),t._v(" "),_("h3",{attrs:{id:"示例代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),_("ul",[_("li",[t._v("基本使用")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('<via-calendar id="calendar" bind:onConfirm="handleConfirm"/>\n\n')])])]),_("h3",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("选中类型")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("multiple")]),t._v(" "),_("td",[t._v("single(单选) multiple(多选)")])]),t._v(" "),_("tr",[_("td",[t._v("date")]),t._v(" "),_("td",[t._v("默认选中的时间")]),t._v(" "),_("td",[t._v("Array")]),t._v(" "),_("td",[t._v("[  ]")]),t._v(" "),_("td",[t._v("YYYY-MM-DD")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("选择器高度")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("1100 rpx")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("cancelColor")]),t._v(" "),_("td",[t._v("取消 字体颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("#333")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("confirmColor")]),t._v(" "),_("td",[t._v("确认 字体颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("#1976D2")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("clickConfirmAutoClose")]),t._v(" "),_("td",[t._v("点击确定 是否自动关闭 弹窗")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("maskClose")]),t._v(" "),_("td",[t._v("点击选择器外侧是否关闭")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"外部样式类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#外部样式类"}},[t._v("#")]),t._v(" 外部样式类")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("类名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")])])])]),t._v(" "),_("h3",{attrs:{id:"插槽"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插槽"}},[t._v("#")]),t._v(" 插槽")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")]),t._v(" "),_("td",[t._v("---")])])])]),t._v(" "),_("h3",{attrs:{id:"事件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("返回值")]),t._v(" "),_("th",[t._v("备注")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("onConfirm")]),t._v(" "),_("td",[t._v("点击确认触发")]),t._v(" "),_("td"),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("onCancel")]),t._v(" "),_("td",[t._v("点击取消触发")]),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),_("p",[t._v("通过 selectComponent 可以获取到 Calendar 实例，并调用实例方法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("方法名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("返回值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("show")]),t._v(" "),_("td",[t._v("显示日历")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("hide")]),t._v(" "),_("td",[t._v("隐藏日历")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);