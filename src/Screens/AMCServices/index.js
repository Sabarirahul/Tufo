import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';

const { width } = Dimensions.get('window');

const AMCServicesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icon name="construct" size={64} color="#fff" style={styles.icon} />
        <Text style={styles.title}>AMC Services</Text>
        <Text style={styles.description}>
          Track and  resolve customer complaints and issues
        </Text>
       
      <View style={{
      backgroundColor:theme.primaryColor,
      padding:10,
      borderRadius: 20,
      }}>
        <LinearGradient
          colors={['#1e2937', '#111828']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBox}
        >
          <Text style={styles.gradientText}>Coming Soon</Text>
        </LinearGradient>
        </View>
      </View>

      <BottomNav routeName={'AMC'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 30,
  },
  gradientBox: {
    width: width * 0.8,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  gradientText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AMCServicesScreen;
