import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import RichHtml from '../../components/richhtml'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  state = {
    article: {
      id: 2,
      title: "小程序富文本组件测试",
      author: "Fesion",
      formatDate: "2019-06-21",
      content: `<div>小程序富文本组件支持<strong>粗体</strong>、<em>斜体</em>、<u>下划线</u>、<strike>删除线</strike>、<span style="color:#ff8c00;">字体颜色</span>、<span style="background-color:#ff8c00;">背景颜色</span>、<strong>以<em>及<strike>他</strike><u><strike>们<span style="color:#ff8c00;">之间的</span></strike><span style="color:#ff8c00;">混<span style="background-color:#00ffff;">合</span></span></u></em><u><span style="color:#ff8c00;"><span style="background-color:#00ffff;">嵌</span></span><span style="background-color:#00ffff;">套使</span></u><span style="background-color:#00ffff;">用</span></strong>。</div>
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
      </div>`,
      category: {
        id: 1,
        title: "富文本分类",
      },
      prev: {
        id: 1,
        title: "上一个小程序富文本组件测试"
      },
      next: {
        id: 3,
        title: "下一个小程序富文本组件测试"
      }
    }
  }

  render() {
    let { article } = this.state

    return (
      <View className='article'>
        <View className='article-header'>
          <View className='article-title'>{article.title}</View>
          <View className='article-meta'>
            {article.category && <Text
              className='article-meta-item link'
            >{article.category.title}</Text>}
            {article.author && <Text
              className='article-meta-item'
            >{article.author}</Text>}
            <Text
              className='article-meta-item'
            >{article.formatDate}</Text>
          </View>
        </View>
        <View className='article-content'>
          <RichHtml fullscreen={false} bgColor='#ffffff' content={article.content} />
        </View>
        <View className='article-footer'>
          {article.prev && <View className='footer-item'>上一篇：<Text className='link'>{article.prev.title}</Text></View>}
          {article.next && <View className='footer-item'>下一篇：<Text className='link'>{article.next.title}</Text></View>}
        </View>
      </View>
    )
  }
}
