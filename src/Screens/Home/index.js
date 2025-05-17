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

function Home(){


  return (
    <View style={{
      flex:1,
      backgroundColor:'#121212'
    }}>
      <Header />
      <ScrollView style={{
      flex:1,
      backgroundColor:'#121212',
    }}
    contentContainerStyle={{
      paddingBottom: 100
    }}
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
