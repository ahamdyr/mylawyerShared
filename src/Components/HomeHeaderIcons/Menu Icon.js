import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { MenuImage } from '../../../assets'

class MenuIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}
        style={this.props.style}
      >
        <Image
          style={{ width: 20, height: 14, marginLeft: 17 }}
          source={MenuImage}
        />
      </TouchableOpacity>
    );
  }
}
export default MenuIcon