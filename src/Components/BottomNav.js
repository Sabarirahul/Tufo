import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, BackHandler, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HOME, HOMEACTIVE } from '../Assets';
import { useNavigation, useRoute } from '@react-navigation/native';
import { theme } from '../Styles/themes';
import ExitModal from './ExitModal';


const screenWidth = Dimensions.get('window').width;


const TABS = [
  { label: 'Dashboard', icon: 'grid-outline', iconActive: 'grid' },
  { label: 'Registers', icon: 'people-outline', iconActive: 'people' },
  { label: 'Offers', icon: 'pricetags-outline', iconActive: 'pricetags' },
  { label: 'AMC', icon: 'construct-outline', iconActive: 'construct' },
  { label: 'Profile', icon: 'person-circle-outline', iconActive: 'person-circle-outline' }
];



const BottomNav = ({ routeName }) => {

  const navigation = useNavigation();
  const route = useRoute();
  const [exitModalVisible, setExitModalVisible] = useState(false);


  useEffect(() => {
    const backAction = () => {

      console.log(route.name);
      if (route.name === 'Home') {
        // Alert.alert(
        //   'Hold on!',
        //   'Are you sure you want to exit the app?',
        //   [
        //     { text: 'Cancel', onPress: () => null, style: 'cancel' },
        //     { text: 'YES', onPress: () => BackHandler.exitApp() },
        //   ]
        // );
        setExitModalVisible(true);



      } else {
        navigation.navigate('Home');
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [routeName]);




  const handleNavigation = (label) => {
    if (label === 'Dashboard') {
      navigation.navigate('Home');
    } else if (label === 'Registers') {
      navigation.navigate('RegistersScreen');
    } else if (label === 'Offers') {
      navigation.navigate('Offers');
    } else if (label === 'AMC') {
      navigation.navigate('AMCServicesScreen');
    } else if (label === 'Profile') {
      navigation.navigate('ProfileScreen');
    }
  };

  return (
    <>
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
                name={routeName === tab.label ? tab.iconActive : tab.icon}
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
      <ExitModal
        visible={exitModalVisible}
        onCancel={() => setExitModalVisible(false)}
        onConfirm={() => BackHandler.exitApp()}
      />

    </>
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
