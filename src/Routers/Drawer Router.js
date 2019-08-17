import React from 'react'
import { Feather as Icon } from 'react-native-vector-icons'
import {createDrawerNavigator} from 'react-navigation'
import {Settings, About, UserProfile} from '../Screens'
import StackRouter from './Stack Router'
import TabRouter from './Tab Router'
import {ScrollView, StyleSheet, View, Text} from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { Updates } from 'expo';

import Constants from 'expo-constants';

const CustomDrawerContentComponent = props => (
  <View style={styles.container}>
    <View style={{justifyContent:'space-around', alignItems:'center'}}>
      <Text>
        My Lawyer
      </Text>
    </View>
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
    <View style={{justifyContent:'space-around', alignItems:'center'}}>
      <Text>
        {Constants.manifest.version}
      </Text>
    </View>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
      //paddingHorizontal: 16
  },
});

const DrawerRouter = createDrawerNavigator({
  Home : {
    screen: StackRouter,
    navigationOptions: {
      drawerLabel: 'Home',
      
      drawerIcon: ({ tintColor }) => <Icon name={"home"} size={17} />,
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name={"settings"} size={17} />,
    }
  },
  Profile: {
    screen: UserProfile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name={"user"} size={17} />,
    }
  }
},{
  contentComponent: CustomDrawerContentComponent,
  drawerWidth: 200
})

export default DrawerRouter

