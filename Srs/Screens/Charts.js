import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput,ScrollView} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import LottieView from 'lottie-react-native';
import { Button,FAB } from "@react-native-material/core";
import Svgimg5 from '../Images/Table1.svg';
import Svgimg6 from '../Images/Table2.svg';
import Svgimg7 from '../Images/Table3.svg';
const Ch = ({navigation }) => {
    
    return (
        <>
        <StatusBar
        translucent={false}
        backgroundColor={'#d9f7a1'}
        barStyle='dark-content'
        hidden={false} />
            <SafeAreaView style={[styles.container]}>
                <View style={styles.v1}><Text style={styles.t1}>Feed charts</Text></View>
                <View style={styles.v2}>
                        <ScrollView
                        horizontal={true}
                         
                        showsHorizontalScrollIndicator={true}>
                        
                        <Svgimg5 width={wp("95%")} marginTop={hp("-13%")}  height={hp("95%")} ></Svgimg5>
                        <Svgimg6 width={wp("95%")}  marginTop={hp("-13%")} height={hp("95%")}></Svgimg6>
                        <Svgimg7 width={wp("95%")}  marginTop={hp("-13%")} height={hp("95%")}></Svgimg7>
                        </ScrollView>
                 </View>
                
            </SafeAreaView>
            </>
            )
}
export default Ch;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: wp("100%"),
        height: hp("100%"),
    },
    v2:{
        justifyContent:"center",
        alignItems: 'center',
        elevation:10,
        color:"white",
     
        padding:10,
        
        flex:0.9,
      //  backgroundColor:"pink",
        
    },
    v1:{
     flex:0.1,
    // backgroundColor:"red"
    },
    t1: {
        fontSize: Text_Size.Text_size_Type_5,
        fontWeight: "bold",
        color: "black",
        marginTop: hp("5%"),
        flex: 1,
        marginLeft: wp("8%")
    },

})
