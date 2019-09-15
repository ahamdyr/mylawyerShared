import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import RatingView from './RatingView';
import { withNavigation } from 'react-navigation'
import { defaultPicture } from '../../../assets'
import { goBack, navigate } from '../../Services/NavigationServices'
import { attachPhoto } from '../../Services/BackendServices/MockData'
import { WIDTH } from '../Constants'

class LawsItem extends React.PureComponent {
  render() {
    const {
      id,
      name,
      office,
      majors,
      photo,
      rate,
      bio
    } = this.props.item
    var { index } = this.props
    //console.log('photo ',this.props.item)
    return (
      <TouchableOpacity
        style={[
          styles.lawsCard,
          index % 2 == 0 ? { marginRight: 15 } : null
        ]}
        activeOpacity={1}
        //onPress={()=>openModal()}
        onPress={() => navigate('LawyerDetails', { lawyer: this.props.item })}
      >
        <View style={styles.lawyerPhoto}>
          <ImageBackground
            source={photo ? { uri: photo } : defaultPicture}
            //source={{ uri: attachPhoto }}
            style={styles.lawyerImage}
            resizeMode={'cover'}
          />
          <View
            style={styles.lowerThird}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15.5 }}>
              {name}
            </Text>
            {/* <Text style={{ color: 'white', fontSize: 13.5 }}>
              {office || 'Office 1'}
            </Text> */}
            {
              this.props.item.hasOwnProperty('majors') ?
                <Text style={{ color: 'white', fontSize: 13.5 }}>
                  {majors[0].name || 'Finance'}
                </Text>
                : null
            }
            <RatingView rating={rate || 3} disabled={true} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(LawsItem)

const styles = StyleSheet.create({
  lawsCard: {
    //borderColor: '#f6f6f6',
    //borderBottomWidth: 0,
    //borderRadius: 8,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    //flex: 1,
    //margin: 7.5,
    height: 263,
    //width: 156.3,
    width: (WIDTH - 61) / 2,
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
    justifyContent: 'space-between',
    //alignItems:''
  },
  lawyerPhoto: {
    flex: 1,
    overflow: 'hidden',
    //elevation: 10,
    borderRadius: 8
  },
  lawyerImage: {
    position: 'absolute', top: 0, right: 0, left: 0, bottom: 0
  },
});