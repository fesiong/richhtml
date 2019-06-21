import Taro, { Component } from '@tarojs/taro'
import { Text } from '@tarojs/components'
import './index.scss'

export default class RichLink extends Component {

  static defaultProps = {
    attrs: {},
    nodes: []
  }

  static options = {
    addGlobalClass: true,
  }

  jumpLink(e) {
    let { href } = this.props.attrs
    
    if(href.indexOf('http') !== -1){
      return Taro.navigateTo({
        url: '/pages/browser/index?url=' + href
      })
    }
    
    Taro.navigateTo({
      url: href
    }).catch(err => {
      Taro.switchTab({
        url: href
      })
    })
  }

  render () {
    const { attrs, nodes } = this.props
    return (
      <Text onClick={this.jumpLink} className={attrs.class} selectable>{nodes[0].text}</Text>
    )
  }
}