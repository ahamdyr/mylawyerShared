import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import {STATUS_BAR_HEIGHT, WIDTH, HEIGHT} from '../Constants'
import DropdownMenu from 'react-native-dropdown-menu';
import { TextInput } from 'react-native-gesture-handler';

export default class SearchComponent extends React.PureComponent {
  state={
    language:'c#',
    text:''
  }
  render(){
    return(
      <View style={styles.selectContainer}> 
        
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchText}
              placeholder={'Search'}
              //onSubmitEditing={(event)=>console.log(event.nativeEvent.text)}
              shouldCancelWhenOutside ={true}
            />
          </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  selectContainer : {
    width: WIDTH,
    height: 55 ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    borderBottomColor: '#d5d5e0',
    borderBottomWidth: 0.5
  },
  searchBox:{
    height: 36,
    width:WIDTH - 32,   
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#f0f0f2',
    backgroundColor: '#f0f0f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText:{    
    fontFamily: 'Lato-Regular',
    letterSpacing: 0.35,
    fontSize: 14
  }
})