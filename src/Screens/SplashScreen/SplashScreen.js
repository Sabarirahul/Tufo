import React, { useEffect, useRef } from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import { SplashLogo } from '../../Assets';
import { theme } from '../../Styles/themes';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen() {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');

        // Animate progress bar
        Animated.timing(progressAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }).start(() => {
          if (token) {
            navigation.replace('Home'); // Navigate to Home if token exists
          } else {
            navigation.replace('LoginScreen'); // Else go to Login
          }
        });

      } catch (error) {
        console.error('Token read error:', error);
        navigation.replace('LoginScreen'); // In case of error, go to login
      }
    };

    checkAuth();
  }, []);

  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <LinearGradient
      colors={['#1D1D1D', '#1D1D1D', '#1DD05D']}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.logoWrapper}>
        <SplashLogo height='100%' width='100%' preserveAspectRatio="xMidYMid meet" />
      </View>

      <Text style={styles.titleText}>
        Venue Control
      </Text>

      <View style={styles.progressBarWrapper}>
        <Animated.View style={[styles.progressBarFill, { width: widthInterpolated }]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.themeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    height: 60,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15,
  },
  progressBarWrapper: {
    width: '40%',
    height: 4,
    backgroundColor: '#D9D9D9',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.secondaryColor,
    borderRadius: 2,
  },
});

export default SplashScreen;
