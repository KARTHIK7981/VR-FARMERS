import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Svgimg1 from '../Images/Squared Menu.svg';

const Cs = ({ navigation }) => {
    return (
        <><StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle='dark-content'
            hidden={false} />
            <SafeAreaView style={[styles.container]}>
                <View style={styles.v1}>
                    <View style={styles.v1_1}></View>
                    <View style={styles.v1_2}> <Svgimg1></Svgimg1></View>
                </View>

            </SafeAreaView>
            </>
    )
}
export default Cs
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9F8A7",
        width: wp("100%"),
        height: hp("100%"),
    },
   

})

