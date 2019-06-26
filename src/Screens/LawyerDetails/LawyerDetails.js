import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import { Linking, WebBrowser } from 'expo'
import BlackX from '../../Components/Common/BlackX'
import RatingView from '../../Components/Lawyers List/RatingView'
import ImageIcon from '../../Components/Common/ImageIcon'
import SubmitBtn from '../../Components/Common/SubmitBtn'
import SeperatorLine from '../../Components/Common/SeperatorLine'
import AskIcon from '../../Components/BottomTabIcons/Ask Icon'
import { getNumSuffix, getFirstName } from '../../Utils/textModifier'
import { defaultPicture } from '../../../assets'

export default class LawyerDetails extends React.Component {
  render() {
    var lawyer = this.props.navigation.state.params.lawyer
    return (
      <View
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
            <AskIcon
              text={getNumSuffix(lawyer.id)}
              style={styles.orderStyle}
              textStyle={styles.orderTextStyle}
            />
          </View>
          

          <View style={styles.lawyerData} >
            <View style={styles.nameContainer} >
              <Text style={styles.nameText} > 
                {lawyer.name}
              </Text>
              <Text style={styles.officeText} >
                {lawyer.office || 'Office 1'}
              </Text>
            </View>
            <RatingView 
              rating={lawyer.rate || 3}
              style={styles.ratingStyle}
              starStyle={styles.starStyle}
            />
          </View>

          <SubmitBtn
            style={styles.askBtnStyle}
            text={`ASK ${getFirstName(lawyer.name).toUpperCase()}`}
            textStyle={styles.askTextStyle}
            onPress={()=>navigate('AskQuestion')}
          />

          <Text style={styles.bio}>
            {lawyer.bio || ''}
          </Text>

          <SeperatorLine style={styles.line} />

          <TouchableOpacity 
            style={styles.footer}
            onPress={async()=> {
              await WebBrowser.openBrowserAsync(`https://reachnetwork.co/${getFirstName(lawyer.name)}`)
            }}
          >
            <Text style={styles.footerText}>
              {`Reach ${getFirstName(lawyer.name)}`}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}