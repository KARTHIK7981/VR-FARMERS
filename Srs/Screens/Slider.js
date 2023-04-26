import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import { SvgUri } from 'react-native-svg';


const Sl = ({ navigation }) => {
    return (
        <SvgUri
        width="100%"
        height="100%"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
    )
}
export default Sl
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        width: wp("100%"),
        height: hp("100%"),
    },
})