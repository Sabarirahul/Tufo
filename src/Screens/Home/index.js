import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import Header from '../../Components/Header';
import DashboardOverView from './DashboardOverView';
import RevenueTrend from './RevenueTrend';
import Analytics from './Analytics';
import BottomNav from '../../Components/BottomNav';
import { theme } from '../../Styles/themes';

function Home(){


  return (
    <View style={{
      flex:1,
      backgroundColor:theme.themeColor
    }}>
      <Header />
      <ScrollView style={{
      flex:1,
      backgroundColor:theme.themeColor,
    }}
    contentContainerStyle={{
      paddingBottom: 120,
      paddingHorizontal: 10, 
      marginVertical: 20 
    }}
    nestedScrollEnabled={true}
    >
      
      <DashboardOverView />
      <RevenueTrend />
      <Analytics />
      
      </ScrollView>
      <BottomNav routeName={'Dashboard'}/>
      
    </View>
  );
}


export default Home;
