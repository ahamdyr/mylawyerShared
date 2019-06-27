import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { STATUS_BAR_HEIGHT, WIDTH, HEIGHT } from '../Constants'
import DropdownMenu from 'react-native-dropdown-menu';
import { TextInput } from 'react-native-gesture-handler';

export default class SearchComponent extends React.PureComponent {
  state = {
    text: ''
  }
  _onSearch = (query) => {
    query.length ? this.props.onSearch(query) : null
  }
  _onCancel = () => {
    this._searchRef.clear()
    this.props.onCancel()
  }
  render() {
    return (
      <View style={[styles.selectContainer, this.props.style]}>
          <View style={styles.searchBox}>
            <TextInput
              ref={(ref) => this._searchRef = ref}
              style={styles.searchText}
              blurOnSubmit={true}
              returnKeyType={'done'}
              placeholder={'Search'}
              //value={this.state.text}
              onChangeText={(text)=> {this.state.text = text}}
              onSubmitEditing={(event) => this._onSearch(event.nativeEvent.text)}
              shouldCancelWhenOutside={true}
            />
            {/* <TouchableOpacity
              onPress={() => this._onCancel()}
              style={styles.cancelStyle}
            >
              <Text style={styles.cancelTextStyle}>
                Cancel
            </Text>
            </TouchableOpacity> */}
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectContainer: {
    width: WIDTH,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5
  },
  searchBox: {
    height: 36,
    width: WIDTH - 32,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#f0f0f2',
    backgroundColor: '#f0f0f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.35,
    fontSize: 14
  },
  searchBar: {
    height: 50,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 17,
    paddingRight: 15
  },
  cancelStyle: {
    position: 'absolute',
    //alignSelf: 'center',
    right: 17,
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  cancelTextStyle: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.35,
    color: "#797980"
  },
})