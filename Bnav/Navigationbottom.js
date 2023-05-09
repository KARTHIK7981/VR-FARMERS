import React from 'react';
import { View, Text, TouchableOpacity, style, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ct from '../Srs/Screens/Croptype';
import Fc from '../Srs/Screens/Feedchart';
import Cl from '../Srs/Screens/FeedCalculator';
import Ps from '../Srs/Screens/Profile';
import Gs from '../Srs/Screens/Graphs';
import Ch from '../Srs/Screens/Charts';
//import { Image } from 'react-native-svg';

const Tab = createBottomTabNavigator();
const Nb = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#D9F8A7",
                tabBarInactiveTintColor: "#f48b28",
                tabBarShowLabel: false,

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 20,
                    height: 50,
                    backgroundColor: "black",

                    borderColor: "black",
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen name="Home" component={Ct}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Srs/Images/Hangar.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d9f7a1' : '#748c94'
                                }}
                            />
                            {/* <Svgimg1></Svgimg1> */}
                            <Text
                                style={{
                                    color: focused ? '#d9f7a1' : '#748c94', fontSize: 12, fontWeight: "700"
                                }}
                            >
                                HOME
                            </Text>
                        </View>
                    )


                }}

            />
            {/* <Tab.Screen name= "Price" component={Feedchart}/> */}
            <Tab.Screen name="Charts" component={Ch}
                options={{
                    headerShown: false
                    , tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Srs/Images/timg.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d9f7a1' : '#748c94',

                                }}
                            />
                            {/* <Svgimg1></Svgimg1> */}
                            <Text
                                style={{
                                    color: focused ? '#d9f7a1' : '#748c94', fontSize: 12, fontWeight: "700"
                                }}
                            >
                                Charts
                            </Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Graphs" component={Gs}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Srs/Images/ComboChart.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d9f7a1' : '#748c94'
                                }}
                            />
                            {/* <Svgimg1></Svgimg1> */}
                            <Text
                                style={{
                                    color: focused ? '#d9f7a1' : '#748c94', fontSize: 12, fontWeight: "700"
                                }}
                            >
                                Analysis
                            </Text>
                        </View>
                    )


                }}

            />
            <Tab.Screen name="Calculator" component={Cl}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Srs/Images/Calculator.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#d9f7a1' : '#748c94',
                                    //Image: focused ? top:2, bottom:3,
                                }}
                            />
                            {/* <Svgimg1></Svgimg1> */}
                            <Text
                                style={{
                                    color: focused ? '#d9f7a1' : '#748c94', fontSize: 12, fontWeight: "700",

                                }}
                            >
                                Calculator
                            </Text>
                        </View>
                    )


                }}

            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7f5df0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 15
    }
});
export default Nb;