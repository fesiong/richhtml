import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
    navigationBarTitleText: '文章详情'
  }

  gotoHome = () => {
    Taro.switchTab({
      url: "/pages/index/index"
    })
  }

  render () {
    return (
      <View>
          这是文章详情页面
          <View onClick={this.gotoHome}>点我回到首页</View>
        </View>
    )
  }
}
