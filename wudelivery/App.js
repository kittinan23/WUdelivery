// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import OrderScreen from './pages/OrderScreen';
import MessageScreen from './pages/MessageScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Setting Page' }}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}
function OrderStack() {
  return (
      <Stack.Navigator
        initialRouteName="Order"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Order" component={OrderScreen} options={{ title: 'Order Page' }}/>
      
      </Stack.Navigator>
  );
}

function MessageStack() {
  return (
      <Stack.Navigator
        initialRouteName="Message"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="Message" component={MessageScreen} options={{ title: 'Message Page' }}/>
        
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>

        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}  />

        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={size} />
            ),
          }} />

<Tab.Screen
          name="OrderStack"
          component={OrderStack}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="order" color={color} size={size} />
            ),
          }} />
<Tab.Screen
          name="MessageStack"
          component={MessageStack}
          options={{
            tabBarLabel: 'Message',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="Message" color={color} size={size} />
            ),
          }} />

          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
