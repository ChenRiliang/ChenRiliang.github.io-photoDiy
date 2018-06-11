(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(a,t,s){"use strict";s.r(t);var n=s(0),c=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"项目常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 项目常见问题")]),s("h2",{attrs:{id:"canvas-svg-转化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas-svg-转化","aria-hidden":"true"}},[a._v("#")]),a._v(" Canvas / SVG 转化")]),s("h3",{attrs:{id:"_1-canvas-生成的图片是黑色-透明-（canvas-todataurl-image-jpeg-）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-canvas-生成的图片是黑色-透明-（canvas-todataurl-image-jpeg-）","aria-hidden":"true"}},[a._v("#")]),a._v(' 1. Canvas 生成的图片是黑色/透明 （canvas.toDataURL("image/jpeg")）')]),s("blockquote",[s("p",[a._v("图片还没加载完毕 就已经绘制了")])]),s("ul",[s("li",[a._v("图片绘制失败: 对图片的处理请放在图片的img.onload事件里。")])]),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    img"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[a._v("onload")]),a._v(" "),s("span",{attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n        "),s("span",{attrs:{class:"token operator"}},[a._v("...")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("do")]),a._v(" something \n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n")])])]),s("h3",{attrs:{id:"_2-canvas提示被污染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-canvas提示被污染","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. Canvas提示被污染")]),s("blockquote",[s("p",[a._v("受限于 CORS 策略，图片跨域问题")])]),s("ul",[s("li",[a._v("请求代理")]),s("li",[a._v("开发环境下可将浏览器设置为跨域模式")]),s("li",[a._v("使用同域名下的图片或者用base64。")]),s("li",[a._v("img.setAttribute(\"crossOrigin\",'Anonymous')")])]),s("h3",{attrs:{id:"_3-利用canvg进行svg转canvas背景样式未渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-利用canvg进行svg转canvas背景样式未渲染","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 利用Canvg进行SVG转Canvas背景样式未渲染")]),s("blockquote",[s("p",[a._v("SVG背景样式将不会被绘制至Canvas")])]),s("ul",[s("li",[a._v("绘制元素前，在画布最底层绘制一个充满全画布的rect，对此元素作背景设置")])]),s("h3",{attrs:{id:"_4-svg转canvas为黑色-透明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-svg转canvas为黑色-透明","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. SVG转Canvas为黑色/透明")]),s("blockquote",[s("p",[a._v("一. SVG未抓取完全； 二. canvg生成canvas未绘制完成；")])]),s("ul",[s("li",[a._v("canvg()参数二为'< svg >...</ svg >'，svg根标签")])]),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    "),s("span",{attrs:{class:"token function"}},[a._v("canvg")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("canvas"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token string"}},[a._v("'< svg >...</ svg >'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n")])])]),s("ul",[s("li",[a._v("在canvg转化完毕的cb里进行操作：")])]),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    "),s("span",{attrs:{class:"token function"}},[a._v("canvg")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("canvas"),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token function"}},[a._v("$")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token string"}},[a._v("'#j_svg_container'")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("html")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("trim")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    renderCallback"),s("span",{attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),s("span",{attrs:{class:"token keyword"}},[a._v("do")]),a._v(" smoething \n            "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),a._v("  \n    "),s("span",{attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"svg-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg-js","aria-hidden":"true"}},[a._v("#")]),a._v(" SVG.JS")]),s("h3",{attrs:{id:"_1-rect设置背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-rect设置背景","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. rect设置背景")]),s("blockquote",[s("p",[a._v("利用fill替代draw方法")])]),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("    rect"),s("span",{attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{attrs:{class:"token function"}},[a._v("fill")]),s("span",{attrs:{class:"token punctuation"}},[a._v("(")]),a._v("string"),s("span",{attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{attrs:{class:"token comment"}},[a._v("// str可为#fff，也可以为bg.svg")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-移动端-字体大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-移动端-字体大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 移动端 字体大小")]),s("blockquote",[s("p",[a._v("由于 'font-size' 有诸多不便，即新增size以同步'font-size'进行更改字体大小")])])])}],!1,null,null,null);t.default=c.exports}}]);