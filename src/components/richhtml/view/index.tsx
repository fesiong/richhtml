import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, RichText, Block } from '@tarojs/components'
import RichImage from '../image'
import RichVideo from '../video'
import RichLink from '../link'
import './index.scss'

export default class RichView extends Component {
  static defaultProps = {
    name: '',
    attrs: {},
    nodes: []
  }

  config = {
    usingComponents: {
      'rich-view': './index'
    }
  }

  static options = {
    addGlobalClass: true,
  }

  render() {
    const { attrs, nodes, name } = this.props
    return (
      <View className={(attrs.class || '') + ' ' + (nodes.length > 1 && name ? '' : 'rich-' + name)} style={attrs.style || ''}>
        {nodes.map((item, index) => {
          return <Block taroKey={index}>
            {item.type && <Text space='nbsp' decode selectable>{item.text}</Text>}
            {item.tagName == 'img' && <RichImage attrs={item.attrs} nodes={item.children} />}
            {item.tagName == 'video' && <RichVideo attrs={item.attrs} nodes={item.children} />}
            {item.tagName == 'a' && <RichLink attrs={item.attrs} nodes={item.children} />}
            {(item.tagName == 'text' || item.tagName == 'view' || item.tagName == 'pre') && <RichView attrs={item.attrs} name={item.name} nodes={item.children} />}
            {(item.tagName !== 'img' && item.tagName !== 'video' && item.tagName !== 'a' && item.tagName !== 'text' && item.tagName !== 'view' && item.tagName !== 'pre') && item.children.length && (
              <RichText nodes={item.children} />
            )}
          </Block>
        })}
      </View>
    )
  }
}