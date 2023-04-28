/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  navigation,
  TextInput,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Svgimg1 from '../Images/Customercare call.svg';
import Svgimg2 from '../Images/Customercaregirl.svg';
import Svgimg8 from '../Images/arrow4.svg';
import LottieView from 'lottie-react-native';
import {Button, FAB} from '@react-native-material/core';
import {BounceIn} from 'react-native-reanimated';

const Cc = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
        hidden={false}
      />
      <SafeAreaView style={[styles.container]}>
        {/* <View style={styles.v1}>
                    <View style={styles.v1_1}>
                        <Svgimg1 style={styles.img1}></Svgimg1>
                    </View>
                    <View style={styles.v1_2}>
                          <Text style={styles.t1}>CustomerCare</Text>
                    </View>
             </View> */}
        <View style={styles.v2}>
          {/* <Svgimg2 style={styles.img2}></Svgimg2> */}
          <LottieView
            style={styles.img2}
            source={require('../Images/85835-call-center-support.json')}
            autoPlay
            loop
          />
        </View>
        <View style={styles.v3}>
          <View style={styles.v3_1}>
            <Text style={styles.t2}>Call us @</Text>
          </View>
          <View style={styles.v3_2}>
            <View style={styles.v3_2_1}>
              <Text
                style={styles.t3}
                onPress={() => {
                  Linking.openURL('tel:9182017247');
                }}>
                +91 9182017247
              </Text>
            </View>

            <View style={styles.v3_2_2}>
              <Text style={styles.t4}>9AM to 6PM(Mon - Sat) </Text>
            </View>
          </View>
          <View style={styles.v3_3}>
            <Text style={styles.t5}>E-Mail us</Text>
          </View>
          <View style={styles.v3_4}>
            <Text
              style={styles.t6}
              onPress={() => {
                Linking.openURL(
                  'mailto:vraquafarmers@gmail.com?subject=SendMail&body=Description: ',
                );
              }}>
              vraquafarmers@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.v4}>
          <Button
            // variant="extended"
            title="Logout"
            onPress={() => navigation.navigate('Croptype')}
            style={styles.btn2}></Button>
          {/* <TouchableOpacity style={styles.btn1}
                                                        onPress={() => navigation.navigate('Croptype')}>
                                                        <Text style={styles.t7}> Back</Text>
                                                        <View style={styles.btn1_1}><Svgimg8 style={styles.icon8}/></View> 
                                                         
                                                </TouchableOpacity>  */}
        </View>
      </SafeAreaView>
      +
    </>
  );
};
export default Cc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('100%'),
  },
  v1: {
    flex: 0.0,
    flexDirection: 'row',
    //  backgroundColor:"purple"
  },
  v1_1: {
    flex: 0.22,
    backgroundColor: 'black',
  },
  img1: {
    marginTop: hp('3%'),
    marginLeft: wp('10%'),
  },
  v1_2: {
    flex: 0.78,
    backgroundColor: 'brown',
  },
  t1: {
    marginTop: hp('4%'),
    marginLeft: wp('1%'),
    fontWeight: '700',
    fontSize: Text_Size.Text_size_Type_1,
    color: 'black',
  },
  v2: {
    flex: 0.4,
    // backgroundColor:"violet",
  },
  img2: {
    marginLeft: wp('3%'),
    marginTop: hp('-1%'),
    justifyContent: 'center',
    height: hp('40%'),
    width: wp('30%'),
  },
  v3: {
    flex: 0.3,
    borderRadius: wp('7%'),
    backgroundColor: '#d9f8a7',
  },
  v3_1: {
    flex: 0.2,
    //backgroundColor:"yellow"
  },
  t2: {
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_2,
    color: 'black',
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
  },
  v3_2: {
    flex: 0.3,
    flexDirection: 'row',
    // backgroundColor:"red"
  },
  v3_2_1: {
    flex: 0.45,
    // backgroundColor:"brown",
    fontWeight: 'bold',
  },
  t3: {
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_11,
    color: 'green',
    marginTop: hp('2%'),
    marginLeft: wp('4%'),
  },
  v3_2_2: {
    flex: 0.55,
    //  backgroundColor:"pink",
  },
  t4: {
    fontWeight: '300',
    fontSize: Text_Size.Text_size_Type_10,
    color: 'black',
    marginTop: hp('2%'),
    marginLeft: wp('1%'),
  },
  v3_3: {
    flex: 0.2,
    // backgroundColor:"gold"
  },
  v3_4: {
    flex: 0.3,

    //backgroundColor:"black"
  },
  t5: {
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_2,
    color: 'black',
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
  },
  t6: {
    //flex:0.4,
    //backgroundColor:"brown",
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_1,
    color: 'green',
    marginTop: hp('2%'),
    marginLeft: wp('6%'),
  },
  v4: {
    flex: 0.3,
    //  backgroundColor:"skyblue"
  },
  // btn1:{
  //     flexDirection:"row",
  //     width: wp('32%'),
  //     height: hp('6%'),
  //     borderRadius: wp('5%'),
  //     backgroundColor: "#d9f8a7",
  //     marginTop: hp('2%'),
  //     marginLeft:wp("35%"),
  //     elevation:10
  // },
  btn2: {
    width: wp('35%'),
    height: hp('6%'),
    fontWeight: 'bold',
    fontSize: '83px',
    justifyContent: 'center',
    marginLeft: wp('32%'),
    backgroundColor: '#202522',
    borderRadius: 40,
    marginTop: hp('4%'),
  },
  t7: {
    flex: 0.7,
    //backgroundColor:"red",
    fontFamily: 'sans-serif',
    color: '#434343',
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_4,
    marginTop: hp('1%'),
    marginLeft: wp('4%'),
  },
  btn1_1: {
    flex: 0.3,
    // backgroundColor:"blue",
    marginTop: hp('1%'),
    marginLeft: wp('-3%'),
  },
});
