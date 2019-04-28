import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground, Dimensions } from 'react-native';
import RatingView from './RatingView';

export default class LawsItem extends React.Component {
  render() {
    const {MainPhotoURL, Name, office, rating, major} = this.props.item.item
    return (
      <View style={styles.lawsCard}>
        <TouchableOpacity
          style={{ flex: 1 }}
        >
          <View style={styles.lawyerPhoto}>
            <ImageBackground
              source={{ uri: MainPhotoURL }}
              style={styles.lawyerImage}
              resizeMode={'cover'}
            />
            <View
              style={styles.lowerThird}
            >
                {/* <View
                  style={[
                    styles.productMeta,
                    { flexDirection: 'row' },
                  ]}
                >
                  <View> */}
                    <Text style={{color:'white', fontWeight:'bold', fontSize:15.5}}>
                      {Name}
                    </Text>
                    <Text style={{color:'white',  fontSize:13.5}}>
                      {office}
                    </Text>
                    <Text style={{color:'white',  fontSize:13.5}}>
                      {major}
                    </Text>
                    <RatingView rating={rating}/>
                  {/* </View>                 
                </View> */}
            </View>
            

          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lawsCard: {
    borderColor: '#f6f6f6',
    borderBottomWidth: 0,
    borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    flex: 1,
    margin: 7.5,
    height: 263,
    width: 156.3,
    //elevation: 10,
    backgroundColor: '#f6f6f6'
  },
  lowerThird: {
    position: 'absolute',
    zIndex: 5,
    //width: '100%',
    paddingHorizontal: 13,
    paddingBottom: 21,
    height: 103,
    bottom: 0,
    justifyContent:'space-between',
    //alignItems:''
  },
  productMeta: {
    // marginVertical:'bottiom',
    //marginTop: Dimensions.get('window').width / 2.0 - 135,
    marginBottom:10,
    paddingHorizontal:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  lawyerPhoto: {
    flex: 1,
    overflow: 'hidden',
    elevation: 10,
    borderRadius: 8
  },
  lawyerImage: {
    position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
  },
});