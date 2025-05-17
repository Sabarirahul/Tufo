import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNav from '../../Components/BottomNav';

const RegistersScreen = () => {
  return (
    <View style={{
          flex:1,
          backgroundColor:'#121212',
          justifyContent: 'center',
    alignItems: 'center',

        }}>
      <Text style={{
                      fontWeight: '600',
                      color: 'white',
                      fontSize: 25,
                  }}>Coming Soon</Text>
                  <BottomNav routeName={'Registers'}/>
    </View>
  );
};

export default RegistersScreen;


