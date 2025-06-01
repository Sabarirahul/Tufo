import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SplashLogo } from '../../Assets';
import { theme } from '../../Styles/themes';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const OTPScreen = () => {
  const route = useRoute();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const navigation = useNavigation();
  const { phoneNumber } = route.params;

  const handleChange = (text, index) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Focus next input
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else if (text === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handleBackspace = (key, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };


  const handleVerifyOTP = async () => {
    const fullOtp = otp.join('');
    if (fullOtp.length === 4) {
      const payload = {
        phoneNumber: phoneNumber,
        otp: fullOtp,
      };

      try {
        setLoading(true);
        const response = await axios.post(
          'https://lhw5ipxwwfhgw5uarha7qnrtva0nghay.lambda-url.us-east-1.on.aws/api/v1/user/verify',
          payload
        );

        if (response.status === 200 && response.data.success) {
          const token = response.data.data.token;
          await AsyncStorage.setItem('authToken', token);
          console.log('OTP verified successfully:', response.data);
          navigation.navigate('Home');
        } else {
          alert('OTP verification failed. Please try again.');
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        alert('An error occurred while verifying the OTP.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a valid 4-digit OTP');
    }
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ ios: 'padding', android: null })}
    >
      <View style={styles.logoWrapper}>
        <View style={styles.logoContainer}>
          <SplashLogo height="100%" width="100%" preserveAspectRatio="xMidYMid meet" />
        </View>
        <Text style={styles.logoText}>Venue Control</Text>
      </View>

      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>
        Confirm the OTP sent to +91 XXXXXXXXXX.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpBox}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) => handleBackspace(nativeEvent.key, index)}
            placeholder=""
            placeholderTextColor="#555"
          />
        ))}
      </View>

      <TouchableOpacity
        style={{
          width: '85%',
          backgroundColor:
            otp.join('').length === 4 ? theme.secondaryColor : theme.primaryColor,
          paddingVertical: 14,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: theme.secondaryColor,
          alignItems: 'center',
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
        disabled={otp.join('').length !== 4 || loading}
        onPress={handleVerifyOTP}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
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
    paddingHorizontal: 20,
  },
  logoWrapper: {
    position: 'absolute',
    top: 10,
    alignItems: 'center',
  },
  logoContainer: {
    height: 60,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: theme.secondaryColor,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '400',
    marginVertical: 30,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 20,
  },
  otpBox: {
    backgroundColor: '#1a1a1a',
    borderColor: '#444',
    borderWidth: 1,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10,
    height: 45,
    width: 45,
  },
  button: {
    width: '80%',
    backgroundColor: theme.secondaryColor,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default OTPScreen;
