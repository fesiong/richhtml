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
      nodes: [{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件支持"},{"name":"strong","tagName":"text","attrs":{"class":"rich-strong "},"children":[{"tagName":"#text","type":"text","text":"粗体"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"em","tagName":"text","attrs":{"class":"rich-em "},"children":[{"tagName":"#text","type":"text","text":"斜体"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"u","tagName":"text","attrs":{"class":"rich-u "},"children":[{"tagName":"#text","type":"text","text":"下划线"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"strike","tagName":"text","attrs":{"class":"rich-strike "},"children":[{"tagName":"#text","type":"text","text":"删除线"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"span","tagName":"text","attrs":{"style":"color:#ff8c00;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"字体颜色"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"span","tagName":"text","attrs":{"style":"background-color:#ff8c00;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"背景颜色"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"strong","tagName":"text","attrs":{"class":"rich-strong "},"children":[{"tagName":"#text","type":"text","text":"以"},{"name":"em","tagName":"text","attrs":{"class":"rich-em "},"children":[{"tagName":"#text","type":"text","text":"及"},{"name":"strike","tagName":"text","attrs":{"class":"rich-strike "},"children":[{"tagName":"#text","type":"text","text":"他"}]},{"name":"u","tagName":"text","attrs":{"class":"rich-u "},"children":[{"name":"strike","tagName":"text","attrs":{"class":"rich-strike "},"children":[{"tagName":"#text","type":"text","text":"们"},{"name":"span","tagName":"text","attrs":{"style":"color:#ff8c00;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"之间的"}]}]},{"name":"span","tagName":"text","attrs":{"style":"color:#ff8c00;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"混"},{"name":"span","tagName":"text","attrs":{"style":"background-color:#00ffff;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"合"}]}]}]}]},{"name":"u","tagName":"text","attrs":{"class":"rich-u "},"children":[{"name":"span","tagName":"text","attrs":{"style":"color:#ff8c00;","class":"rich-span "},"children":[{"name":"span","tagName":"text","attrs":{"style":"background-color:#00ffff;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"嵌"}]}]},{"name":"span","tagName":"text","attrs":{"style":"background-color:#00ffff;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"套使"}]}]},{"name":"span","tagName":"text","attrs":{"style":"background-color:#00ffff;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"用"}]}]},{"tagName":"#text","type":"text","text":"。"}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持打开小程序"},{"name":"a","tagName":"a","attrs":{"href":"\/pages\/article\/index","class":"rich-a "},"children":[{"tagName":"#text","type":"text","text":"页面链接"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"a","tagName":"a","attrs":{"href":"\/pages\/index\/index","class":"rich-a "},"children":[{"tagName":"#text","type":"text","text":"打开tabbar链接"}]},{"tagName":"#text","type":"text","text":"、"},{"name":"a","tagName":"a","attrs":{"href":"https:\/\/www.baidu.com","class":"rich-a "},"children":[{"tagName":"#text","type":"text","text":"网页链接"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持有序列表"}]},{"name":"ol","tagName":"view","attrs":{"class":"rich-ol "},"children":[{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第一列"}]},{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第二列"}]},{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第三列"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件也支持无序列表"}]},{"name":"ul","tagName":"view","attrs":{"class":"rich-ul "},"children":[{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第一列"}]},{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第二列"}]},{"name":"li","tagName":"view","attrs":{"class":"rich-li "},"children":[{"tagName":"#text","type":"text","text":"第三列"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持左对齐"}]},{"name":"div","tagName":"view","attrs":{"style":"text-align: center;","class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持居中"}]},{"name":"div","tagName":"view","attrs":{"style":"text-align: right;","class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持右对齐"}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"支持字号设置"}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"name":"span","tagName":"text","attrs":{"style":"font-size:36px;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"三号"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"name":"span","tagName":"text","attrs":{"style":"font-size:24px;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"四号"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"name":"span","tagName":"text","attrs":{"style":"font-size:14px;","class":"rich-span "},"children":[{"tagName":"#text","type":"text","text":"五号"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"支持标题设置"}]},{"name":"h1","tagName":"view","attrs":{"class":"rich-h1 "},"children":[{"tagName":"#text","type":"text","text":"h1标题"}]},{"name":"h2","tagName":"view","attrs":{"class":"rich-h2 "},"children":[{"tagName":"#text","type":"text","text":"h2标题"}]},{"name":"h3","tagName":"view","attrs":{"class":"rich-h3 "},"children":[{"tagName":"#text","type":"text","text":"h3标题"}]},{"name":"h4","tagName":"view","attrs":{"class":"rich-h4 "},"children":[{"tagName":"#text","type":"text","text":"h4标题"}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"支持图片展示"},{"name":"img","tagName":"img","attrs":{"src":"http:\/\/i5.hexun.com\/2019-06-21\/197591143.jpg","class":"rich-img ","style":"max-width: 100% !important; height: auto !important;"}}]},{"name":"blockquote","tagName":"view","attrs":{"class":"rich-blockquote "},"children":[{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件还支持引用"}]}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"tagName":"#text","type":"text","text":"小程序富文本组件也支持表格的展示"}]},{"name":"div","tagName":"view","attrs":{"class":"rich-div "},"children":[{"name":"table","tagName":"table","attrs":{"style":"width: 100%","class":"rich-table "},"children":[{"tagName":"#text","type":"text","text":"    "},{"name":"thead","tagName":"thead","attrs":{"class":"rich-thead "},"children":[{"tagName":"#text","type":"text","text":"        "},{"name":"tr","tagName":"tr","attrs":{"class":"rich-tr "},"children":[{"tagName":"#text","type":"text","text":"            "},{"name":"th","tagName":"th","attrs":{"class":"rich-th "},"children":[{"tagName":"#text","type":"text","text":"性别"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"th","tagName":"th","attrs":{"class":"rich-th "},"children":[{"tagName":"#text","type":"text","text":"姓名"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"th","tagName":"th","attrs":{"class":"rich-th "},"children":[{"tagName":"#text","type":"text","text":"年龄"}]},{"tagName":"#text","type":"text","text":"        "}]},{"tagName":"#text","type":"text","text":"    "}]},{"tagName":"#text","type":"text","text":"    "},{"name":"tbody","tagName":"tbody","attrs":{"class":"rich-tbody "},"children":[{"tagName":"#text","type":"text","text":"        "},{"name":"tr","tagName":"tr","attrs":{"class":"rich-tr "},"children":[{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"男"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"猪坚强"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"18"}]},{"tagName":"#text","type":"text","text":"        "}]},{"tagName":"#text","type":"text","text":"        "},{"name":"tr","tagName":"tr","attrs":{"class":"rich-tr "},"children":[{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"女"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"牛八宝"}]},{"tagName":"#text","type":"text","text":"            "},{"name":"td","tagName":"td","attrs":{"class":"rich-td "},"children":[{"tagName":"#text","type":"text","text":"22"}]},{"tagName":"#text","type":"text","text":"        "}]},{"tagName":"#text","type":"text","text":"    "}]}]}]}],
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

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
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
            <RichHtml nodes={article.nodes} />
          </View>
          <View className='article-footer'>
            {article.prev && <View className='footer-item'>上一篇：<Text className='link'>{article.prev.title}</Text></View>}
            {article.next && <View className='footer-item'>下一篇：<Text className='link'>{article.next.title}</Text></View>}
          </View>
        </View>
    )
  }
}
