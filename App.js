import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import Header from './src/Components/Header';
import DashboardOverView from './src/DashboardOverView';
import RevenueTrend from './src/RevenueTrend';
import Analytics from './src/Analytics';

function App(){

  return (
    <View style={{
      flex:1,
      backgroundColor:'#121212'
    }}>
      <SafeAreaView
        style={[
          { backgroundColor:'#121212',
            height:StatusBar.currentHeight

          },

        ]}>
        <StatusBar
          backgroundColor={'#121212'}
          barStyle={'light-content'}
        />
      </SafeAreaView>
      <Header />
      <ScrollView style={{
      flex:1,
      backgroundColor:'#121212',
    }}
    contentContainerStyle={{
      paddingBottom:50
    }}
    >
      
      <DashboardOverView />
      <RevenueTrend />
      <Analytics />


      </ScrollView>
      
    </View>
  );
}


export default App;
