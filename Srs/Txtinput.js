import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from './Textscaling';

export default function Tin(){
const [Input, setInput]=React.useState("");
console.log('input');
return(
    <View style={styles.container}>
            <TextInput 
            style={styles.input}
            onChangeText={(Text) => setInput(Text)}
            value={Input}
            placeholder ="Enter Mobile Number"
            placeholderTextColor="black"
            keyboardType="numeric"
            keyboardAppearance="light"
           />
   </View>
)
}
const styles = StyleSheet.create({
input:{
    width:wp("55%"),
    borderColor:"#202522",
    fontWeight:"400",
    fontSize: Text_Size.Text_size_Type_10,
    borderWidth:wp("0.5%"),
    borderRadius:wp("50%"),
    padding:wp("2%"),
    color:"black",
    //borderBottomWidth:wp("0.5%"),
    //marginTop:hp("3%"),
    //marginLeft:wp("1%")
    
},
})