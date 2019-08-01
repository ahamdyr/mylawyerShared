import React from 'react'
import { createStackNavigator} from "react-navigation";
import ProfileScreen from '../Screens/ProfileScreen'
import EditMyProfile from '../Screens/EditMyProfile'
import ResetPassword from '../Screens/ResetPassword'
import ImageIcon from '../Components/Common/ImageIcon'
import { BackArrow } from '../../assets'

export default ProfileStack = createStackNavigator({
  ProfileScreen:{
    screen: ProfileScreen,
  },
  EditMyProfile:{
    screen: EditMyProfile,
  },
  ResetPassword:{
    screen: ResetPassword,
  },
},
{
  initialRouteName: "ProfileScreen",
  //mode: 'modal',
  headerLayoutPreset: 'center',
  //headerMode: 'none'  
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
  defaultNavigationOptions: {
    headerTitleStyle: {
      fontFamily: "NunitoSans-Bold",
      fontSize: 18,
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff"
    },
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
      fontFamily: "NunitoSans-Regular",
      fontSize: 17,
      fontWeight: "normal",
      fontStyle: "normal",
      letterSpacing: 0,
      color: "#ffffff"
    },
    headerBackImage: () => <ImageIcon source={BackArrow} style={{height: 21, width: 12}} />,
    headerTintColor: 'white',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#0b7f7c',
    }
  }
})