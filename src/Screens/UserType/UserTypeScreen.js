import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { styles } from './Styles'
import {
  navigate,
  goBack
} from '../../Services/NavigationServices'
import ImageIcon from '../../Components/Common/ImageIcon'
import { userLogo, lawyerIcon } from '../../../assets'

export default class UserTypeScreen extends React.Component {
  _onSelect = (userType) => {
    this.props.setUserType(userType)
    if(userType == 'user'){
      navigate('SocialScreen')
    }
    else{
      navigate('SignUpWithMail')
    }
  }
  render() {    
    return (
      <SafeAreaView
        style={styles.transparentContainer}
      >
        <View style={styles.container}>
          <Text style={styles.ContinueAs}>
            Continue as
          </Text>
          <View style={styles.btnContainer} >
            <View style={styles.lawyerView} >
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={()=>this._onSelect('lawyer')}
              >
                <ImageIcon
                  source={lawyerIcon}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.name} >
                Lawyer
              </Text>
            </View>
            <Text style={styles.or} >
              or
            </Text>
            <View style={styles.userView} >
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={()=>this._onSelect('user')}
              >
                <ImageIcon
                  source={userLogo}
                  style={styles.image}
                />
              </TouchableOpacity>
              <Text style={styles.name} >
                Inquirer
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}