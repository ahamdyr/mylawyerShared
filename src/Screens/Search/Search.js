import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles'
import { goBack } from '../../Services/NavigationServices'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import SearchList from '../../Components/Common/SearchList'

export default class Search extends React.Component {
 
  render() {
    var {
      searchLawyersSuccess,
      //getLawyersLoading,
      searchLawyersRequest,
      //getLawyersRequest
    } = this.props
    return (
      <View style={styles.container}>
        <View
          style={styles.searchBar}
        >
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchText}
              blurOnSubmit={true}
              returnKeyType={'done'}
              placeholder={'Search'}
              onSubmitEditing={(event)=>searchLawyersRequest(event.nativeEvent.text)}
              shouldCancelWhenOutside ={true}
            />
          </View> 
          <TouchableOpacity 
            onPress={()=>{
              goBack()
            }}
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
        {
          searchLawyersSuccess.length ?
          <SearchList list={searchLawyersSuccess} />
          :
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{
                fontSize: 16,
                color: '#0b7f7c'
              }}>
                No Lawyers Found!
              </Text>
            </View>
        }
        
      </View>
    );
  }
}
