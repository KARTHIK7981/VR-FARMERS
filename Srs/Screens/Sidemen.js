import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Svgimg1 from '../Images/Squared Menu.svg';

const Sis = ({ navigation }) => {
    return (
        
            <SafeAreaView style={[styles.container]}>
              <TouchableOpacity
                 Style ={{alignItems:"flex-end", margin:16}}
                 onPress={this.props.navigation.openDrawer}>
                <Svgimg1></Svgimg1>
              </TouchableOpacity>
              <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
                <Text style={styles.text}>{this.props.name}Screen</Text>
              </View>

            </SafeAreaView>
            
    )
}
export default Sis
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9F8A7",
        width: wp("100%"),
        height: hp("100%"),
    },
   

})