import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HOME, HOMEACTIVE } from '../Assets';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const navigation = useNavigation();
const TABS = [
  { label: 'Home', icon: 'home-outline' },
  { label: 'Offer', icon: 'pricetags-outline' },
  { label: 'Registration', icon: 'person-add-outline' },
  { label: 'Contact', icon: 'call-outline' }
]


const BottomNav = ({routeName}) => {

    const handleNavigation = (label) => {
        if (label === 'Home') {
          navigation.navigate('Home');
        } else if (label === 'Offer') {
          navigation.navigate('Offer');
        } else if (label === 'Registration') {
          navigation.navigate('Registration');
        } else if (label === 'Contact') {
          navigation.navigate('Contact');
        }
      };
  return (
    <View style={styles.wrapper}>
      <View style={styles.curvedBackground} />

      <View style={styles.tabContainer}>
        {TABS.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => handleNavigation(tab.label)}
          >
            <Icon
              name={tab.icon}
              size={24}
              color={routeName === tab.label ? '#4caf50' : '#ccc'}
            /> 
            <Text style={[styles.label, routeName === tab.label && styles.activeLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curvedBackground: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: 80,
    backgroundColor: '#1e1e1e',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  tabButton: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 4,
  },
  activeLabel: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
});

export default BottomNav;
