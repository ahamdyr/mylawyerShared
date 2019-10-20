import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Linking
} from 'react-native';
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import BlackX from '../../Components/Common/BlackX'
import RatingView from '../../Components/Lawyers List/RatingView'
import ImageIcon from '../../Components/Common/ImageIcon'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import GreenCircle from '../../Components/BottomTabIcons/GreenCircle'
import { getNumSuffix, getFirstName } from '../../Utils/textModifier'
import { defaultPicture } from '../../../assets'

export default class LawyerDetails extends React.Component {
  render() {
    var lawyer = this.props.navigation.state.params.lawyer
    return (
      <SafeAreaView
        style={styles.transparentContainer}
      >
        <View style={styles.container}>

          <BlackX
            onPress={() => goBack()}
          />
          <View style={styles.imageContainer}>
            <ImageIcon
              style={styles.lawyerPhoto}
              source={ lawyer.photo ? { uri: lawyer.photo } : defaultPicture}
            />
            {/* <GreenCircle
              //text={getNumSuffix(lawyer.id)}
              text={lawyer.id}
              style={styles.orderStyle}
              textStyle={styles.orderTextStyle}
            /> */}
          </View>
          

          <View style={styles.lawyerData} >
            <View style={styles.nameContainer} >
              <Text style={styles.nameText} > 
                {lawyer.name}
              </Text>
              {
                lawyer.hasOwnProperty('majors') ?
                  <Text style={styles.officeText} >
                    {lawyer.majors[0].name}
                  </Text>
                  : null
              }              
            </View>
            <RatingView 
              disabled={true}
              rating={lawyer.rate || 0}
              style={styles.ratingStyle}
              starStyle={styles.starStyle}
            />
          </View>

          <SubmitBtn
            style={styles.askBtnStyle}
            text={`ASK ${getFirstName(lawyer.name).toUpperCase()}`}
            textStyle={styles.askTextStyle}
            onPress={()=>navigate('AskQuestion', {lawyer: lawyer})}
          />

          <Text style={styles.bio}>
            {lawyer.bio || ''}
          </Text>

          <SeperatorLine style={styles.line} />

          <TouchableOpacity 
            style={styles.footer}
            onPress={async()=> {
              lawyer.reachAccount ?
                await Linking.openURL(lawyer.reachAccount)
                : Alert.alert('Sorry',`${getFirstName(lawyer.name)} doesn\'t have reach account yet.`)
            }}
          >
            <Text style={styles.footerText}>
              {`Reach ${getFirstName(lawyer.name)}`}
            </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  }
}