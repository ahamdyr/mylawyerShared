import React from 'react'
import {Image} from 'react-native'
import {Mail} from '../../../assets'

export default class MailLogo extends React.PureComponent{
  render(){
    return(
      <Image
        style ={{
          width: 21.5,
          height: 16,
          marginLeft: 7
        }}
        source = {Mail}
      />
    )
  }
}