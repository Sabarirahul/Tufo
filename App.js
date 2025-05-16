import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import ActiveUsersList from './src/Screens/Home/ActiveUsersList';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      
      <SafeAreaView style={{ flex: 0, backgroundColor: '#121212' }} />
      
      <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
        <StatusBar backgroundColor="#121212" barStyle="light-content" />
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="ActiveUsersList" 
              component={ActiveUsersList} 
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
