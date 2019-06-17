import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigate, goBack } from '../../../Services/NavigationServices'
import VerifyTitle from '../../../Components/LawyerVerifyComp/VerifyStepTitle'
import ImageIcon from '../../../Components/Common/ImageIcon'
import { clapping } from '../../../../assets'
import ReturnBtn from '../../../Components/LawyerVerifyComp/ReturnBtn'

export default class Step4 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <VerifyTitle
          title={'All is set up'}
          subTitle={'We will review your submited papers to verify your account'}
        //step={'Step 3: Firm papers'}
        />
        <ImageIcon
          style={styles.clapping}
          source={clapping}
        />

        <Text style={styles.footerText}>
          {'Once we complete the reviewing procces we will send you an email to strat your journey'}
        </Text>

        <ReturnBtn 
          btnTitle={'Return to home'}
          //onPress={()=>navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b7f7c",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  clapping: {
    width: 198,
    height: 198
  },
  footerText: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "center",
    color: "#b9f9f7"
  }
});