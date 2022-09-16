import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { AppStyles } from '../AppStyles';
import CustomButton from '../../components/common/CustomButton';

export default function LoginScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressFacebook = () => { };

  const onPressLogin = () => {

    if (email.length <= 0 || password.length <= 0)
    {
      Alert.alert('Please fill out the required fields.');
    } else
    {
      navigation.navigate("ProductScreen");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail or phone number"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.loginContainer}>
        <CustomButton title={"  Log in"} onPress={onPressLogin} />
        {/* <CustomButton title={"  Log in"} onPress={() => navigation.navigate('ProductScreen')} /> */}
      </View>
      <View style={styles.facebookContainer}>
        <CustomButton title={" Log in facebook"} onPress={() => navigation.navigate('ProductScreen')} />
      </View>
      <View style={styles.googleContainer}>
        <CustomButton title={" Log in google"} onPress={() => navigation.navigate('ProductScreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },

  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    width: "85%"

  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    width: "85%"

  },
  googleContainer: {
    backgroundColor: AppStyles.color.greenBlue,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    width: "85%"

  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleText: {
    color: AppStyles.color.white,
  },
});

