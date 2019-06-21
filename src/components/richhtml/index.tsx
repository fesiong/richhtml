import Taro, { Component } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
import RichView from './view'
import './index.scss'

export default class RichHtml extends Component {
  static defaultProps = {
    fullhtml: false,
    bgColor: '#ffffff',
    nodes: [],
  }

  static options = {
    addGlobalClass: true,
  }

  render() {
    const { nodes } = this.props
    return (
      <View>
        <RichView nodes={nodes} />
      </View>
    )
  }
}