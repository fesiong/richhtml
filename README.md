# 基于Taro开发的小程序富文本组件 

富文本组件支持微信小程序、百度小程序、支付宝小程序，理论上支持Taro可生成的所有小程序。

## 使用说明 
该组件需要依赖Taro。如果你的项目没有使用Taro开发小程序，将无法使用。  
至于Taro的使用说明，请[参考这里](https://nervjs.github.io/taro/docs/GETTING-STARTED.html)

组件支持直接传入html格式的文档内容，组件会自动将它们解析成nodes。

## Taro项目的使用方法 
将components/richhtml文件夹复制到你的项目的components目录，然后在需要使用富文本的页面中，引入richhtml组件  
```jsx
import RichHtml from '../../components/richhtml'
```
然后将在页面放置rich组件  
```jsx
<RichHtml fullscreen={false} bgColor='#ffffff' content={article.content} />
```

## 对table的支持情况  
目前table在组件渲染中效果不是很理想，所以将它直接交由RichText标签渲染。
   

<div>小程序富文本组件支持<strong>粗体</strong>、<em>斜体</em>、<u>下划线</u>、<strike>删除线</strike>、<span style="color:#ff8c00;">字体颜色</span>、<span style="background-color:#ff8c00;">背景颜色</span>、<strong>以<em>及<strike>他</strike><u><strike>们<span style="color:#ff8c00;">之间的</span></strike><span style="color:#ff8c00;">混<span style="background-color:#00ffff;">合</span></span></u></em><u><span style="color:#ff8c00;"><span style="background-color:#00ffff;">嵌</span></span><span style="background-color:#00ffff;">套使</span></u><span style="background-color:#00ffff;">用</span></strong>。</div>
<div>小程序富文本组件还支持打开小程序<a href="/pages/article/index">页面链接</a>、<a href="/pages/index/index">打开tabbar链接</a>、<a href="https://www.baidu.com">网页链接<strong>以<em>及<strike>他</strike><u><strike>们<span style="color:#ff8c00;">之间的</span></strike><span style="color:#ff8c00;">混<span style="background-color:#00ffff;">合</span></span></u></em><u><span style="color:#ff8c00;"><span style="background-color:#00ffff;">嵌</span></span><span style="background-color:#00ffff;">套使</span></u><span style="background-color:#00ffff;">用</span></strong></a></div>
<div>小程序富文本组件还支持有序列表</div>
<ol><li>第一列</li><li>第二列</li><li>第三列</li></ol>
<div>小程序富文本组件也支持无序列表</div>
<ul><li>第一列</li><li>第二列</li><li>第三列</li></ul>
<div>小程序富文本组件还支持左对齐</div>
<div style="text-align: center;">小程序富文本组件还支持居中</div>
<div style="text-align: right;">小程序富文本组件还支持右对齐</div>
<div>支持字号设置</div>
<div><span style="font-size:36px;">三号</span></div>
<div><span style="font-size:24px;">四号</span></div>
<div><span style="font-size:14px;">五号</span></div>
<div>支持标题设置</div>
<h1>h1标题</h1>
<h2>h2标题</h2>
<h3>h3标题</h3>
<h4>h4标题</h4>
<div>支持图片展示<img src="http://i5.hexun.com/2019-06-21/197591143.jpg"/></div>
<blockquote><div>小程序富文本组件还支持引用</div></blockquote>
<div>小程序富文本组件也支持表格的展示</div>
<div>
<table border="1" cellpadding="1" cellspacing="1" style="width: 100%">
    <thead>
        <tr>
            <th>性别</th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>男</td>
            <td style="width: 50%;"><strong>以<em>及<strike>他</strike><u><strike>们<span style="color:#ff8c00;">之间的</span></strike><span style="color:#ff8c00;">混<span style="background-color:#00ffff;">合</span></span></u></em><u><span style="color:#ff8c00;"><span style="background-color:#00ffff;">嵌</span></span><span style="background-color:#00ffff;">套使</span></u><span style="background-color:#00ffff;">用</span></strong></td>
            <td>18</td>
        </tr>
        <tr>
            <td>女</td>
            <td>牛八宝</td>
            <td>22</td>
        </tr>
    </tbody>
</table>
</div>