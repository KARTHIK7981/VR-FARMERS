/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  style,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Croptype';
import Fc from './Feedchart';
import Gs from './Graphs';
import FeedCalculator from './Profile';
import Ps from './Profile';
import Cc from './Customer support';
import Tc from './Terms & conditions';
import Pp from './Privacy Policy';
import Ls from './Login';
import Back from './Croptype';
import Ct from './Croptype';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Sidebar = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
        hidden={false}
      />

      <NavigationContainer independent={true}>
        <Drawer.Navigator>
          <Drawer.Screen key="Home" name="Home" component={Home} />
          <Drawer.Screen key="Feedchart" name="Feedchart" component={Fc} />
          <Drawer.Screen
            key="RateChart"
            name="RateChart"
            component={Gs}
          />

          <Drawer.Screen
            key="FeedCalculator"
            name="FeedCalculator"
            component={FeedCalculator}
          />
          <Drawer.Screen
            name="Profile"
            component={Ps}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Customer support"
            component={Cc}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Terms & conditions"
            component={Tc}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />

          <Drawer.Screen
            name="Privacy Policy"
            component={Pp}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Ls}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
          <Drawer.Screen
            name="Croptype"
            component={Ct}
            options={{
              drawerItemStyle: {
                display: 'none',
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Sidebar;
