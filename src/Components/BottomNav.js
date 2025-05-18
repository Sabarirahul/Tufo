import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HOME, HOMEACTIVE } from '../Assets';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../Styles/themes';

const screenWidth = Dimensions.get('window').width;


const TABS = [
  { label: 'Dashboard', icon: 'grid-outline' },       
  { label: 'Registers', icon: 'people' },     
  { label: 'Offers', icon: 'pricetags-outline' },        
  { label: 'AMC', icon: 'construct-outline' },   
  { label: 'Profile', icon: 'person-circle-outline' }    
];



const BottomNav = ({routeName}) => {
const navigation = useNavigation();

    const handleNavigation = (label) => {
        if (label === 'Dashboard') {
          navigation.navigate('Home');
        } else if (label === 'Registers') {
          navigation.navigate('RegistersScreen');
        } else if (label === 'Offers') {
          navigation.navigate('Offers');
        } else if (label === 'AMC') {
          navigation.navigate('AMCServicesScreen');
        }  else if (label === 'Profile') {
          navigation.navigate('ProfileScreen');
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
              color={routeName === tab.label ? theme.secondaryColor : '#ccc'}
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
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
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
