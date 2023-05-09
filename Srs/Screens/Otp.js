import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Oin from '../Otpin';
import Svgimg1 from '../Images/2937927_clipdrop-background-removal 1.svg' ;
import Svgimg2 from '../Images/Play.svg';
import Svgimg3 from '../Images/3D Touch.svg';
import LottieView from 'lottie-react-native';
import { Button,FAB } from "@react-native-material/core";

const Os = ({ navigation }) => {
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
                        <LottieView style={styles.i1} source={require('../Images/105173-verification-code-otp.json')} autoPlay loop  />
                        </View>

                </View>
                <View style={styles.v2}>
                        <View style={styles.v2_1}>
                                <View style={styles.b1}>
                                        <View style={styles.b1_1}>
                                                {/* <View style={styles.b1_1_1}><Svgimg3 style={styles.icon1}/></View> */}
                                                <Text style={styles.t1}>Verify OTP</Text>
                                        </View>
                                        <View style={styles.b1_2}>
                                                   <Text style={styles.t2}>Enter the OTP sent via SMS.</Text>
                                        </View>

                                        {/* <View style={styles.b1_3}>
                                                  <Text style={styles.t3}>OTP  Code</Text>
                                        </View> */}
                                        

                                        <View style={styles.b1_4}>
                                                 
                                                  <View style={styles.number}><Oin ></Oin></View> 
                                        </View>
                                        

                                        <View style={styles.b1_5}>
                                            <Button 
                                            // variant="extended"
                                            title="Proceed" 
                                            onPress={() => navigation.navigate('Navigationbottom')}  style={styles.btn2} ></Button>
                                                    {/* <TouchableOpacity style={styles.btn1}
                                                        onPress={() => navigation.navigate('New')}>
                                                        <Text style={styles.t4}> Proceed</Text>
                                                        <View style={styles.b1_5_1}><Svgimg2 style={styles.icon3}/></View> 
                                                         
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
export default Os
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9F8A7",
        width: wp("100%"),
        height: hp("100%"),
    },
            v1: {
                flex: 0.4,
               //  backgroundColor:"blue"
            },
                    v1_1: {
                        flex: 0.15,
                      //  backgroundColor:"black"
                    },
                    v1_2: {
                        flex: 0.85,
                       //  backgroundColor:"green"
                    },
                    i1:{
                        width:wp("70%"),
                        height:hp("45%"),
                        marginLeft:wp("2%"),
                        marginTop:hp("-1%")

                    },
            v2: {
                flex: 0.6,
               // backgroundColor:"grey"
            },
                    v2_1: {
                        flex: 0.9,
                    // backgroundColor: 'red'
                    },
                            b1: {
                                backgroundColor: "white",
                                width:wp("76%"),
                                height:hp("34%"),
                                marginLeft:wp("12%"),
                                marginTop:hp("0%"),
                                borderRadius:wp("8%"),
                                elevation:25
                            },
                                b1_1:{
                                flex:0.15,
                               // backgroundColor:"gold",
                                flexDirection:"row"
                                },   
                                b1_1_1:{
                                    flex:0.3,
                                  //  backgroundColor:"lightblue"
                                },
                                   icon1:{
                                    width:wp("57%"),
                                     height:hp("20%"),
                                     marginTop:hp("1.5%"),
                                     marginLeft:wp("11%")
                                   },
                                    t1:{
                                    flex:1,
                                    fontSize:Text_Size.Text_size_Type_5,
                                    fontWeight:"bold",
                                    color:"black",
                                  marginLeft:wp("22%"),
                                    marginTop:hp("1%"),
                                    //backgroundColor:"maroon"
                                },
                                b1_3:{
                                flex:0.15,
                                //backgroundColor:"violet", 
                                },
                                    t3:{
                                        fontWeight:"700",
                                        fontSize:Text_Size.Text_size_Type_4,
                                        color:"black",
                                        marginLeft:wp("10%"),
                                        marginTop:hp("2%"),
                                        fontFamily:"san-serif"
                                    },
                                b1_4:{
                                    
                                    flex:0.3,
                                  //  backgroundColor:"purple"
                                },
                                number:{
                                    flex:1,
                                    //marginLeft:wp("5%"),
                                    justifyContent:"center",
                                    alignItems:"center"
                                  //  backgroundColor:"black"
                                },
                                b1_2:{
                                    flex:0.15,
                                    //backgroundColor:"lightblue", 
                                    },
                                            t2:{
                                                fontWeight:"600",
                                                fontSize:Text_Size.Text_size_Type_6,
                                                color:"#36454F",
                                                marginLeft:wp("16%"),
                                                marginTop:hp("2%"),
                                                fontFamily:"san-serif"
                                        },
                                        b1_5:{
                                        flex:0.4,
                                       // backgroundColor:"blue"
                                        },
                                            btn1:{
                                                flexDirection:"row",
                                                width: wp('35%'),
                                                height: hp('6%'), 
                                            // justifyContent: "center", 
                                                //alignItems: "center", 
                                                borderRadius: wp('5%'), 
                                                backgroundColor: "#202522", 
                                                marginTop: hp('2%'),
                                                marginLeft:wp("22%"),
                                                elevation:10
                                            },
                                            btn2:{
                                                width: wp('35%'),
                                                height:hp('6%'),
                                               fontWeight:"bold",
                                               fontSize:'83px',
                                                justifyContent:"center" ,
                                                marginLeft:wp("22%"),
                                                backgroundColor: "#202522",
                                                borderRadius: 40, 
                                                marginTop: hp('4%'),
                                                marginLeft:wp("20%"),
                                                
                                            },
                                            t4:{
                                                fontFamily: 'sans-serif',
                                                color: "white", 
                                                fontWeight: "bold", 
                                                fontSize: Text_Size.Text_size_Type_9,
                                                flex:0.8,
                                               // backgroundColor:"maroon",
                                                marginTop:hp("1%"),
                                                marginLeft:wp("3%")
                                            },
                                            b1_5_1:{
                                            flex:0.2,
                                            //backgroundColor:"yellow"
                                            },  
                                            icon3:{
                                                 width:wp("100%"),
                                                 height:hp("100%"),
                                                 marginLeft:wp("-4.5%"),
                                                 marginTop:hp("1%")
                                            }   ,
                    v2_2: {
                        flex: 0.1,
                    // backgroundColor: "orange"
                    }
})