import React from 'react'
import {Image} from 'react-native'

export default class ImageIcon extends React.PureComponent{
  render(){
    const {style, source} = this.props
    return(
      <Image
        style ={style}
        source = {source}
      />
    )
  }
}