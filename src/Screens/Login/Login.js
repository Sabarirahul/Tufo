import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SplashLogo } from '../../Assets';
import { theme } from '../../Styles/themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleSendOTP = () => {
    if (phoneNumber.length === 10) {
      console.log(`Sending OTP to +91${phoneNumber}`);
      navigation.navigate('OTPScreen');
      // navigate or call API to send OTP
    } else {
      alert('Enter a valid 10-digit phone number');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: null })}
    >

<View style={{
 position:'absolute',
 top:10
}}>
        <View style={{
            height: 60,
    width: 190,
    justifyContent: 'center',
    alignItems: 'center',
        }}>
                <SplashLogo height='100%' width='100%' preserveAspectRatio="xMidYMid meet" />
              </View>
        
              <Text style={{
                fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15,
              }}>
                Venue Control
              </Text>
              </View>
      <Text style={styles.title}>Login</Text>
      <Text style={{
        fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '400',
    marginVertical:30
      }}>
        Enter your Mobile number to receive verification code 
      </Text>

       <View style={styles.inputContainer}>
      <Icon name="phone" size={20} color="#aaa" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Contact Number"
        keyboardType="phone-pad"
        maxLength={10}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholderTextColor="#aaa"
      />
    </View>

      <TouchableOpacity style={{
        width: '100%',
    backgroundColor: phoneNumber.length === 10 ?  theme.secondaryColor : theme.primaryColor, // Spotify green
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth:2,
    borderColor:theme.secondaryColor,
    alignItems: 'center',
    marginTop:15
      }} 
      disabled={phoneNumber.length === 10 ? false : true}
      onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    color: theme.secondaryColor,
    fontStyle:'italic',
    fontWeight: '700',
  },
   inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#444',
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: theme.secondaryColor, // Spotify green
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:15
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  }
});

export default LoginScreen;
