import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import RatingView from './RatingView';
import { withNavigation } from 'react-navigation'
import { defaultPicture } from '../../../assets'
import { goBack, navigate} from '../../Services/NavigationServices'

class LawsItem extends React.PureComponent {
  render() {
    const {
      id,
      name,
      office,
      major,
      photo,
      rate,
      bio
    } = this.props.item.item
    return (
      <View style={styles.lawsCard}>
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          //onPress={()=>openModal()}
          onPress={() => navigate('LawyerDetails', { lawyer: this.props.item.item })}
        >
          <View style={styles.lawyerPhoto}>
            <ImageBackground
              source={photo ? { uri: photo } : defaultPicture}
              style={styles.lawyerImage}
              resizeMode={'cover'}
            />
            <View
              style={styles.lowerThird}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15.5 }}>
                {name}
              </Text>
              <Text style={{ color: 'white', fontSize: 13.5 }}>
                {office || 'Office 1'}
              </Text>
              <Text style={{ color: 'white', fontSize: 13.5 }}>
                {major || 'Finance'}
              </Text>
              <RatingView rating={rate || 3} />
            </View>


          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default withNavigation(LawsItem)

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
    justifyContent: 'space-between',
    //alignItems:''
  },
  productMeta: {
    // marginVertical:'bottiom',
    //marginTop: Dimensions.get('window').width / 2.0 - 135,
    marginBottom: 10,
    paddingHorizontal: 1,
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