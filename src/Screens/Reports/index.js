import React from 'react';
import { View, Text } from 'react-native';
import BottomNav from '../../Components/BottomNav';

const ReportsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: '600',
          color: 'white',
          fontSize: 25,
        }}>
        Coming Soon
      </Text>
      <BottomNav routeName={'Reports'} />
    </View>
  );
};

export default ReportsScreen;
