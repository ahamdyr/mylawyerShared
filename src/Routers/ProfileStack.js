import React from 'react'
import { createStackNavigator} from "react-navigation";
import ProfileScreen from '../Screens/ProfileScreen'
import EditMyProfile from '../Screens/EditMyProfile'
import ResetPassword from '../Screens/ResetPassword'
import BackIcon from '../Components/ProfileHeaderIcons/BackIcon'

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
  headerMode: 'none',  
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
    },
  }),
  defaultNavigationOptions: ({ navigation }) => ({
    headerTitleStyle: {
      fontFamily: "NunitoSans-Bold",
      fontSize: 18,
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "center",
      color: "#ffffff"
    },
    headerLeft: () => <BackIcon onPress={() => navigation.goBack()} />,
    headerTintColor: 'white',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#0b7f7c',
    }
  }),
})