import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Home from './src/Screens/Home';
import ActiveUsersList from './src/Screens/Home/ActiveUsersList';
import RegistersScreen from './src/Screens/Registers';
import Offers from './src/Screens/Offers';
import AMCServicesScreen from './src/Screens/AMCServices';
import ProfileScreen from './src/Screens/Profile';
import Notifications from './src/Screens/Notifications';
import { theme } from './src/Styles/themes';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.themeColor }} edges={['top', 'bottom']}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ActiveUsersList" component={ActiveUsersList} options={{ headerShown: false }} />
            <Stack.Screen name="RegistersScreen" component={RegistersScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
            <Stack.Screen name="AMCServicesScreen" component={AMCServicesScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
