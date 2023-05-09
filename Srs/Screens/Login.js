import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import Svgimg1 from '../Images/Loginsvg.svg';
import Svgimg2 from '../Images/Network 2.svg';
import Svgimg3 from '../Images/India (IN).svg';
import Svgimg4 from '../Images/Play.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Tin from '../Txtinput';
import { Button } from "@react-native-material/core";
import LottieView from 'lottie-react-native';


const Ls = ({ navigation }) => {
    return (
        <><StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle='dark-content'
            hidden={false} />
            <SafeAreaView style={[styles.container]}>

                <View style={styles.v1}>
                    <View style={styles.v1_1}></View>
                    <View style={styles.v1_2}>
                        {/* <Svgimg1 style={styles.i1}/> */}
                        <LottieView style={styles.i1} source={require('../Images/56713-women-typing-message (1).json')} autoPlay loop />
                    </View>

                </View>
                <View style={styles.v2}>
                    <View style={styles.v2_1}>
                        <View style={styles.b1}>
                            {/* <View style={styles.b1_1}>
                                                <View style={styles.b1_1_1}></View>
                                                <Text style={styles.t1}>VR AquaFarmers</Text>
                                        </View> */}

                            <View style={styles.b1_2}>
                                <Text style={styles.t2}>L O G I N</Text>
                            </View>

                            <View style={styles.b1_3}>
                                <View style={styles.b1_3_1}>
                                    {/* <Svgimg3 style={styles.icon2}/> */}
                                    <LottieView style={styles.icon2} source={require('../Images/107605-typing.json')} autoPlay loop />
                                </View>
                                <View style={styles.b1_3_2}>
                                    <View style={styles.number}><Tin ></Tin></View>
                                </View>
                            </View>
                            <View style={styles.b1_4}>
                                <Text style={styles.t3}>*You will get an verfication code..</Text>
                            </View>

                            <View style={styles.b1_5}>
                                <Button title="LOGIN" onPress={() => navigation.navigate('Otp')} style={styles.btn2}></Button>
                                {/* <TouchableOpacity style={styles.btn1}
                                                        onPress={() => navigation.navigate('Otp')}>
                                                        <Text style={styles.t4}> Get OTP</Text>
                                                        <View style={styles.b1_5_1}><Svgimg4 style={styles.icon3}/></View> 
                                                    </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.v2_2}>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}
export default Ls
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9F8A7",
        width: wp("100%"),
        height: hp("100%"),
    },
    v1: {
        flex: 0.4,
        // backgroundColor:"blue"
    },
    v1_1: {
        flex: 0.15,
        //backgroundColor:"black"
    },
    v1_2: {
        flex: 0.85,
        // backgroundColor:"white"
    },
    i1: {
        width: wp("80%"),
        height: hp("40%"),
        marginLeft: wp("3%"),
        marginTop: hp("2.5%")

    },
    v2: {
        flex: 0.6,
    },
    v2_1: {
        flex: 0.9,
        // backgroundColor: 'red'
    },
    b1: {
        backgroundColor: "white",
        width: wp("78%"),
        height: hp("40%"),
        marginLeft: wp("12%"),
        marginTop: hp("0%"),
        borderRadius: wp("8%"),
        elevation: 25
    },
    b1_1: {
        flex: 0.15,
        // backgroundColor:"green",
        flexDirection: "row"
    },
    // b1_1_1:{
    //     flex:0.3,
    //     backgroundColor:"lightblue"
    // },
    //    icon1:{
    //     width:wp("57%"),
    //      height:hp("20%"),
    //      marginTop:hp("1%"),
    //      marginLeft:wp("12%")
    //    },
    t1: {
        flex: 1,
        fontSize: Text_Size.Text_size_Type_4,
        fontWeight: "bold",
        color: "black",
        justifyContent: "center",
        marginLeft: wp("16%"),
        marginTop: hp("0%"),
        // backgroundColor:"maroon"
    },
    b1_2: {
        flex: 0.15,
        // backgroundColor:"darkblue", 
    },
    t2: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: Text_Size.Text_size_Type_4,
        color: "black",
        marginLeft: wp("26%"),
        marginTop: hp("1%"),
        fontFamily: "san-serif"
    },
    b1_3: {
        flexDirection: "row",
        flex: 0.3,
        // backgroundColor:"red"
    },
    b1_3_1: {
        flex: 0.25,
        // backgroundColor:"violet",
        marginTop: hp("1%"),
        marginLeft: wp("0%")

    },
    icon2: {
        //backgroundColor:"black",
        width: wp("4%"),
        height: hp("9%"),
        // marginTop:hp("2%"),

    },
    number: {
        flex: 0.75,
        marginLeft: wp("3%"),
        marginTop: hp("2%"),
        // backgroundColor:"skyblue",
        //alignItems:"flex-end"
    },
    b1_3_2: {
        flex: 1,
        //backgroundColor:"yellow",
        marginTop: hp("0%"),
        marginLeft: wp("0%")


    },
    b1_4: {
        flex: 0.15,
        // backgroundColor:"lightblue", 
    },
    t3: {
        fontWeight: "100",
        fontSize: Text_Size.Text_size_Type_6,
        color: "#36454F",
        marginLeft: wp("2%"),
        marginTop: hp("1%"),
        fontFamily: "san-serif"
    },
    b1_5: {
        flex: 0.25,
        // backgroundColor:"green"
    },
    btn1: {
        flexDirection: "row",
        width: wp('35%'),
        height: hp('6%'),
        // justifyContent: "center", 
        //alignItems: "center", 
        borderRadius: wp('5%'),
        backgroundColor: "#202522",
        //  marginTop: hp('1.5%'),
        marginLeft: wp("22%"),
        elevation: 10,

    },
    btn2: {
        width: wp('35%'),
        height: hp('6%'),
        justifyContent: "center",
        marginLeft: wp("22%"),
        backgroundColor: "#202522",
        borderRadius: 40,
    },
    t4: {
        fontFamily: 'sans-serif',
        color: "white",
        fontWeight: "bold",
        fontSize: Text_Size.Text_size_Type_9,
        flex: 0.8,
        // backgroundColor:"maroon",
        marginTop: hp("1%"),
        marginLeft: wp("3%")
    },
    b1_5_1: {
        flex: 0.2,
        //backgroundColor:"red"
    },
    icon3: {
        width: wp("100%"),
        height: hp("100%"),
        marginLeft: wp("-4.5%"),
        marginTop: hp("1%")
    },
    v2_2: {
        flex: 0.1,
        // backgroundColor: "orange"
    }
})