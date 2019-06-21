import Taro, { Component, Config } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import './index.scss'

export default class RichImage extends Component {

  static defaultProps = {
    attrs: {},
    nodes: [],
  }

  state = {
    width: 0,
    height: 0,
  }

  static options = {
    addGlobalClass: true,
  }

  onLoad = (e) => {
    let {width, height} = e.detail
    console.log(width);
    if(width > 355){
      this.setState({
        width: "100%",
        height: 355*height/width * 2
      })
    }else{
      this.setState({
        width: width * 2,
        height: height * 2
      })
    }
  }

  preview = (e) => {
    e.stopPropagation()
    let { src } = this.props.attrs
    Taro.previewImage({
      urls: [src]
    })
  }

  render () {
    const { attrs, nodes } = this.props
    const {width, height} = this.state
    return (
      <Image mode='aspectFit' onLoad={this.onLoad} onClick={this.preview} className={attrs.class} src={attrs.src} style={'width: ' + width + 'rpx;height: ' + height + 'rpx;'} />
    )
  }
}