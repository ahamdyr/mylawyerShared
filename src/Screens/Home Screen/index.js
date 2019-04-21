import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import MenuIcon from '../../Components/Menu Icon'
import SearchIcon from '../../Components/Search Icon'
import HeaderTitle from '../../Components/Header Title'
import { createStackNavigator} from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    headerRight: <SearchIcon onPress={() =>navigation.toggleDrawer()}/>,
    headerLeft: <MenuIcon onPress={() =>navigation.toggleDrawer()}/>  ,
    //headerBackTitle: 'null',
    headerTitle:<HeaderTitle title={`My Lawyer`}/>,    
  })

  render() {
    return (
      <View style={styles.container}>
       
        
        <Text>Home!</Text>
        
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />

        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />

      </View>
    );
  }
}

export default HomeStack = createStackNavigator({
  Home:{
    screen: HomeScreen,
    
    navigationOptions: ({ navigation }) => ({
      headerRight: <SearchIcon onPress={() =>navigation.toggleDrawer()}/>,
      headerLeft: <MenuIcon onPress={() =>navigation.toggleDrawer()}/>  ,
      //headerBackTitle: 'null',
      headerTitle:<HeaderTitle title={`My Lawyer`}/>,      
    }),
  }
},{  
  headerLayoutPreset :"center"
});
 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});