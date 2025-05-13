import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import Header from './src/Header';
import DashboardOverView from './src/DashboardOverView';
import RevenueTrend from './src/RevenueTrend';

function App(){

  return (
    <View style={{
      flex:1,
      backgroundColor:'#121212'
    }}>
      <SafeAreaView
        style={[
          { backgroundColor:'#121212'},
        ]}>
        <StatusBar
          backgroundColor={'#121212'}
          barStyle={'light-content'}
        />
      </SafeAreaView>
      <ScrollView style={{
      flex:1,
      backgroundColor:'#121212',
    }}>
      <Header />
      <DashboardOverView />
      <RevenueTrend />


      </ScrollView>
      
    </View>
  );
}


export default App;
