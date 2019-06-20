import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles'
import { goBack } from '../../Services/NavigationServices'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import SearchList from '../../Components/Common/SearchList'

export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={styles.searchBar}
        >
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchText}
              placeholder={'Search'}
              //onSubmitEditing={(event)=>console.log(event.nativeEvent.text)}
              shouldCancelWhenOutside ={true}
            />
          </View> 
          <TouchableOpacity 
            onPress={()=>goBack()}
            style={styles.cancelStyle}
          >
            <Text style={styles.cancelTextStyle}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <SeperatorLine
          style={styles.line}
        />
        <SearchList/>
      </View>
    );
  }
}
