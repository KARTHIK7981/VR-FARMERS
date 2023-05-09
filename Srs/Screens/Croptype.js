import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';
import Text_Size from '../Textscaling';
import { Dimensions } from 'react-native';
import Svgimg1 from '../Images/Male User.svg';
import Svgimg2 from '../Images/vimg.svg';
//import Svgimg3 from '../Images/vimg.svg';
import Svgimg4 from '../Images/tiger.svg';
import Svgimg5 from '../Images/vannamei.svg';
import Svgimg6 from '../Images/blacktiger.svg';
import Svgimg7 from '../Images/girl.svg';
import { SvgUri, SvgXml } from 'react-native-svg';
import LottieView from 'lottie-react-native';

const width = Dimensions.get('window').width;
const Ct = ({ navigation }) => {
    return (
        <><StatusBar
            translucent={true}
            backgroundColor={'#d9f8a7'}
            barStyle='dark-content'
            hidden={false} />
            <SafeAreaView style={[styles.container]}>
           <View style={styles.v1}>
                    <View style={styles.v1_1}><Text style={styles.t1}>Crop Manuals</Text></View>
                                <View style={styles.v1_2} >
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')}> 
                                <LottieView  style={styles.img1} source={require('../Images/63065-profile-in-out.json')}  autoPlay loop  />
                                         {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}> 
                                                 <View style={styles.v1_2_1}><Svgimg1 style={styles.img1}  ></Svgimg1></View>
                                                 </TouchableOpacity> */}
                                                 </TouchableOpacity>
                                                 </View>
                                                 
            </View>
            <View style={styles.v2}>
                    <View style={styles.v2_1}><Text style={styles.t2}>Organisation & cultivation of crop</Text></View>
            </View>
            <View style={styles.v3}>
                    <View style={styles.v3_1}>
                    
                    <Carousel
                        loop
                        autoPlay={true}
                        width={width}    
                        height={width / 1}
                        data={[{
                            img:<Svgimg5 width={wp("80%")}  ></Svgimg5>
                            // img:<Image source={require('../Images/i1.png')} style={{backgroundColor:"orange",
                            // width:wp("90%"),height:hp("20%")
                            //                         }} />,
                           // text:"hi",
                        },
                        {
                            img:
                            <Svgimg4 width={wp("80%")} ></Svgimg4>
                        //     img:<Image source={require('../Images/i2.png')} style={{backgroundColor:"orange",
                        //     width:wp("95%"),
                        //     //borderRadius:wp("5%")
                            
                        // }} />,
                            //text:"hello"
                        },
                        {
                            img:<Svgimg6 width={wp("80%")}></Svgimg6>
                            // text:"bye"
                        }
                    ]}
                            
                    
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item,index }) => (
                    <View
                        style={{
                            flex: 1,
                            marginTop:hp("0%"),
                            width:wp("100%"),
                            justifyContent: "center",
                            alignItems:"center",
                            margin:wp("0%"),
                        }}
                    > 
                    <TouchableOpacity onPress={() => navigation.navigate('Feedchart' , {text: item['text'] })}>
                    {item['img']}
                    </TouchableOpacity>
                    </View>
                )}
                />
                    </View>
            </View>
            <View style={styles.v4}>
                    <View style={styles.v4_1}><Svgimg7 width={wp("100%")}  height={hp("33%")} marginLeft={wp("-28%")} marginTop={hp("4%")} ></Svgimg7></View>
            </View>
            </SafeAreaView>
        </>
    )
}
export default Ct
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: wp("100%"),
        height: hp("100%"),
    },
   
    v1:{
        flex:0.1,
       // backgroundColor:"red",
        flexDirection:"row"
    },
        v1_1:{
            flex:0.5,
            //backgroundColor:"yellow",
        },
                t1:{
                    fontSize:Text_Size.Text_size_Type_2,
                    fontWeight:"bold",
                    color:"black",
                    marginTop:hp("4%"),
                    flex:1,
                    marginLeft:wp("7%")
                },
        v1_2:{
            flex:0.5,
           // backgroundColor:"brown",
            
        },
        v1_2_1:{
         // backgroundColor:"green"
        },
        img1:{
            // flex:1,
             marginTop:hp("1%"),
             marginLeft:wp("15%"),
            // backgroundColor:"violet",
             height:hp("5%")
        },
    v2:{
        flex:0.1,
        //backgroundColor:"orange",
        justifyContent:"center",
    },
    t2:{
        fontSize:Text_Size.Text_size_Type_6,
        fontWeight:"400",
        color:"black",
        justifyContent:"center",
        alignItems:"center",
        marginTop:hp("0%"),
        marginLeft:wp("14%")
    },
    v3:{
        flex:0.4,
        //backgroundColor:"red"
    },
       v3_1:{
           flex:1,
           justifyContent:"center",
          // marginTop:hp("5%"),
          // backgroundColor:"blue"
       },
        // img2:{
        //     transform: [{ rotate: '-4deg'}]
        // },
    v4:{
        flex:0.4,
       // backgroundColor:"black"
    }
    , v4_1:{
        //backgroundColor:"skyblue",
        //marginLeft:wp("10%"),
        //width:wp("100%"),
        flex:1
    }
})