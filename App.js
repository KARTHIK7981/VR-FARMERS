import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity ,StatusBar,SafeAreaView ,LogBox} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Nb from "./Bnav/Navigationbottom";
import Ls from './Srs/Screens/Login/';
// import Si from "./Srs/Screens/Signin";
// import Bn from "./Srs/Bottomnav";
// import Ts from "./Srs/navigation/tabs";
import Tin from "./Srs/Txtinput";
import App from "./Srs/Txtinput";
import Os from "./Srs/Screens/Otp";
import Cl from "./Srs/Screens/FeedCalculator";
import Oin from "./Srs/Otpin";
import Cs from "./Srs/Screens/Cropcul"
import Sidebar from "./Srs/Screens/menu";
import Ct from "./Srs/Screens/Croptype";
import Fc from "./Srs/Screens/Feedchart";
import Ps from "./Srs/Screens/Profile";
import Cc from "./Srs/Screens/Customer support";
import Tc from "./Srs/Screens/Terms & conditions";
import Pp from "./Srs/Screens/Privacy Policy";
import Ch from "./Srs/Screens/Charts";
import { FadeIn, FadeOut } from "react-native-reanimated";
// import Sis from "./Srs/Screens/Sidemen";
//mport s from './Srs/Screens/Slider'

// import { createAppContainer } from "react-navigation";
//import {createDrawerNavigator} from '@react-navigation/drawer';
// import{ 
//      Profilescreen,
//      Messagescreen,
//      Activityscreen,
//      Signoutscreen
// } from './Srs/Screens';

// const DrawerNavigator =createDrawerNavigator({
//   Profilescreen,
//   Messagescreen,
//   Activityscreen,
//   Signoutscreen
// },{
//   contentComponent: props =><Sidebar {...props}/>
// });
// import Sidebar from "./components/Sidebar";

// export default createAppContainer(DrawerNavigator);

LogBox.ignoreLogs(['Invalid prop textStyle of type array supplied to Cell']);
 const Stack = createNativeStackNavigator();

 function MyStack(){ 
  // const App = () =>{
  return (
    <NavigationContainer  independent={true}>
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Ls} />
        <Stack.Screen name="Otp" component={Os} />
        {/* <Stack.Screen name="Signin" component={Si} /> */}
        <Stack.Screen name="Navigationbottom" component={Nb}/>
        <Stack.Screen name="Charts" component={Ch}/>
        <Stack.Screen name="FeedCalculator" component={Cl}/>
        <Stack.Screen name="Profile" component={Ps} />
        <Stack.Screen name="Croptype" component={Ct} />
        <Stack.Screen name="Privacy Policy" component={Pp}/> 
        <Stack.Screen name="Customer support" component={Cc}/>
        <Stack.Screen name="Terms & conditions" component={Tc}/>
        <Stack.Screen name="Feedchart" component={Fc} />
         
     </Stack.Navigator>
     
     </NavigationContainer>
     );
    }
    export default MyStack;
        
        {/* <Stack.Screen name="Croptype" component={Ct} />
        <Stack.Screen name="Privacy Policy" component={Pp}/>  */}
        {/* <Stack.Screen name="New" component={Sidebar} />
       
        <Stack.Screen name="Feedchart" component={Fc} />
        <Stack.Screen name="Profile" component={Ps} />
        <Stack.Screen name="Customer support" component={Cc}/>
        <Stack.Screen name="Terms & conditions" component={Tc}/>
         
        {/* <Stack.Screen name="Privacy Policy" component={s}/> */}
     
    
    // <View>
    //   <Text>Hi</Text>
    // </View>