import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import { MAIN_COLOR, WIDTH } from "../Constants";
import SeperatorLine from "../Common/SeperatorLine";
import LoginButton from "../Common/LoginButton";
import ImageIcon from "../Common/ImageIcon";
import LockImage from "../Common/LockImage";
import { PhoneIcon, UserIcon } from "../../../assets";
import { isValidPhoneNumber } from "../../Utils/InputValidation";
import Store from "../../Redux/Store";
import { setPhoneNumber } from "../../Redux/Auth/actions";
import CountryPicker from "react-native-country-picker-modal";

export default class LoginWithPhoneForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.phone = "";
    this.state = {
      phone: "",
      country: {
        cca2: "EG",
        callingCode: "20",
        name: "Egypt"
      }
    };
  }
  _onChangeMobNumberText = val => {
    this.setState({ phone: val });
  };
  _loginSubmit = () => {
    this.phone = "+" + this.state.country.callingCode + this.state.phone;
    if (!isValidPhoneNumber(this.phone)) {
      showMessage({
        message: "Provide valid phone number !",
        hideOnPress: true,
        duration: 3000,
        type: "danger"
      });
    } else {
      Store.dispatch(setPhoneNumber(this.state.phone, this.state.country.callingCode));
      this.props.onPress();
    }
  };
  _changeCountry = country => {
    this.setState({ country });
  };
  _countryPickerFocus = () => {
    this.countryPicker.openModal();
  };

  _renderCallingCode = () => {
    return (
      <TouchableOpacity
        style={{ width: 80, alignItems: "center", marginLeft: 8 }}
        onPress={this._countryPickerFocus}
      >
        <View style={styles.callingCodeView}>
          <CountryPicker
            ref={countryPicker => (this.countryPicker = countryPicker)}
            closeable
            //filterable
            onChange={this._changeCountry}
            cca2={this.state.country.cca2}
            translation="eng"
          />
          <Text style={styles.nmberStyle}>
            +{this.state.country.callingCode}
          </Text>
        </View>
        <SeperatorLine style={{ width: 75 }} />
      </TouchableOpacity>
    );
  };

  _renderPhoneNumber = () => {
    return (
      <View style={{ marginLeft: 15, width: 140, alignItems: "center" }}>
        <View style={styles.numberContainer}>
          <TextInput
            ref="phoneRef"
            name={"phoneNumber"}
            type={"TextInput"}
            underlineColorAndroid={"transparent"}
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={this._onChangeMobNumberText}
            placeholder={"Phone Number"}
            keyboardType={"phone-pad"}
            style={[styles.nmberStyle]}
            returnKeyType="go"
            selectionColor={"white"}
            placeholderTextColor={"#ffffff"}
            maxLength={20}
          />
        </View>
        <SeperatorLine style={{ width: 135 }} />
      </View>
    );
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SeperatorLine />

        <View style={styles.inputContainer}>
          {this._renderCallingCode()}
          {this._renderPhoneNumber()}
        </View>
        {/* <View style={styles.inputContainer}>
          <ImageIcon
            style={styles.phoneIconStyle}
            source={PhoneIcon}
          />
          <TextInput       
            //autoFocus  
            blurOnSubmit={true}
            underlineColorAndroid={'transparent'}
            placeholder={'+20 123 456 7890' }
            selectionColor={'white'}            
            keyboardType={'phone-pad'}
            style={styles.nmberStyle}
            placeholderTextColor={'#ffffff'}
            onChangeText={this._onChangeMobNumberText}
          />
        </View> */}

        {/* <SeperatorLine/> */}

        <LoginButton
          text={"Login"}
          style={{
            marginTop: 26
          }}
          onPress={() => this._loginSubmit()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  inputContainer: {
    width: 250,
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    fontFamily: "Lato-Light",
    fontSize: 16,
    marginLeft: 16,
    color: "white",
    width: 200
  },
  forgot: {
    fontFamily: "Lato-Light",
    fontSize: 12,
    color: "white",
    position: "absolute",
    right: 0
  },
  callingCodeView: {
    width: 70,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  nmberStyle: {
    fontFamily: "Lato-Light",
    fontSize: 17,
    marginLeft: 5,
    color: "white"
    //width: 200
  },
  phoneIconStyle: {
    height: 16,
    width: 16,
    marginLeft: 11.5
  },
  numberContainer: {
    width: 140,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "center"
  }
});
