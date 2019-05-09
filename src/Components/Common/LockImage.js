import React from 'react'
import {Image} from 'react-native'
import {Lock} from '../../../assets'

export default class LockImage extends React.PureComponent{
  render(){
    return(
      <Image
        style ={{
          width: 10,
          height: 16,
          marginLeft: 12.5
        }}
        source = {Lock}
      />
    )
  }
}