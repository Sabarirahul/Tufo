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

function SplashScreen() {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      navigation.replace('LoginScreen');
    });
  }, []);

  const widthInterpolated = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={[styles.logoWrapper]}>
        <SplashLogo height='100%' width='100%' preserveAspectRatio="xMidYMid meet" />
      </View>

      <Text style={[styles.titleText]}>
        Venue Control
      </Text>

      <View style={styles.progressBarWrapper}>
        <Animated.View style={[styles.progressBarFill, { width: widthInterpolated }]} />
      </View>
    </View>
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
    height: 70,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 15,
  },
  progressBarWrapper: {
    width: '45%',
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
