import React from 'react'
import { createStackNavigator } from "react-navigation";
import Step1 from '../LawyerScreens/LawyerVerification/Step1'
import Step2 from '../LawyerScreens/LawyerVerification/Step2'
import Step3 from '../LawyerScreens/LawyerVerification/Step3'
import Step4 from '../LawyerScreens/LawyerVerification/Step4'
import SelectMajor from '../LawyerScreens/LawyerVerification/SelectMajor'
import HeaderTitle from '../Components/HomeHeaderIcons/Header Title'
import { logo_text } from '../../assets'
import ImageIcon from '../Components/Common/ImageIcon'

const LawyerVerificationStack = createStackNavigator({
  Step1: {
    screen: Step1,
  },
  Step2: {
    screen: Step2,
  },
  Step3: {
    screen: Step3,
  },
  Step4: {
    screen: Step4,
  },
  SelectMajor: {
    screen: SelectMajor,
  },
}, {
    initialRouteName: "Step1",
    mode: 'modal',
    headerLayoutPreset: 'center',
    //headerMode: 'none'  
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    defaultNavigationOptions: {
      //headerTitle:<HeaderTitle title={`My Lawyer`} style={{color:'#ffffff'}} />,
      //headerLeft: null,    
      headerTitle: <ImageIcon source={logo_text} style={{ width: 95, height: 26.5 }} />,
      headerTintColor: 'white',
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#0b7f7c',
      }
    }
  });


export default LawyerVerificationStack