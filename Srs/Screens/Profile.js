/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';
import Svgimg1 from '../Images/Userpic.svg';
import Svgimg2 from '../Images/Online Support.svg';
import Svgimg3 from '../Images/Term.svg';
import Svgimg4 from '../Images/Privacy Policy.svg';
import Svgimg5 from '../Images/arrow1.svg';
import Svgimg6 from '../Images/arrow2.svg';
import Svgimg7 from '../Images/arrow3.svg';
import Svgimg8 from '../Images/arrow4.svg';
import LottieView from 'lottie-react-native';
import {Button, FAB} from '@react-native-material/core';

const Ps = ({navigation}) => {
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
        hidden={false}
      />
      <SafeAreaView style={[styles.container]}>
        <View style={styles.v1}>
          <View style={styles.v1_1}>
            {/* <Svgimg1 style={styles.img1}></Svgimg1> */}
            <LottieView
              style={styles.img1}
              source={require('../Images/122222-profile-avatar-for-child.json')}
              autoPlay
              loop
            />
          </View>

          <View style={styles.v1_2}>
            <Text style={styles.t1}>Mobile Number : +919390132374</Text>
          </View>
        </View>

        <View style={styles.v2}>
          <TouchableOpacity
            style={styles.v2_1}
            onPress={() => navigation.navigate('Customer support')}>
            <View style={styles.v2_1_1}>
              <Svgimg2 style={styles.img2}></Svgimg2>
            </View>
            <View style={styles.v2_1_2}>
              <Text style={styles.t2}>Customer support</Text>
            </View>
            <View style={styles.v2_1_3}>
              <Svgimg5 style={styles.img3}></Svgimg5>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.v2_2}
            onPress={() => navigation.navigate('Terms & conditions')}>
            <View style={styles.v2_2_1}>
              <Svgimg3 style={styles.img4}></Svgimg3>
            </View>
            <View style={styles.v2_2_2}>
              <Text style={styles.t3}>Terms & Conditions</Text>
            </View>
            <View style={styles.v2_2_3}>
              <Svgimg6 style={styles.img5}></Svgimg6>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.v2_3}
            onPress={() => navigation.navigate('Privacy Policy')}>
            <View style={styles.v2_3_1}>
              <Svgimg4 style={styles.img6}></Svgimg4>
            </View>
            <View style={styles.v2_3_2}>
              <Text style={styles.t4}>Privacy Policy</Text>
            </View>
            <View style={styles.v2_3_3}>
              <Svgimg7 style={styles.img7}></Svgimg7>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.v3}>
          <Button
            // variant="extended"
            title="Logout"
            onPress={() => navigation.navigate('Login')}
            style={styles.btn2}></Button>
          {/* <TouchableOpacity style={styles.btn1}
                                                        onPress={() => navigation.navigate('Login')}>
                                                        <Text style={styles.t5}> Logout</Text>
                                                        <View style={styles.btn1_1}><Svgimg8 style={styles.icon8}/></View> 
                                                         
                                                </TouchableOpacity>    */}
        </View>

        {/* <View><Text>Hii</Text></View> */}
      </SafeAreaView>
    </>
  );
};
export default Ps;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('100%'),
  },

  v1: {
    flex: 0.35,
    //backgroundColor:"red"
  },
  v1_1: {
    flex: 0.75,
    // backgroundColor:"black"
  },
  img1: {
    marginLeft: wp('7%'),
    marginTop: hp('-2%'),
    height: hp('33%'),
  },
  v1_2: {
    flex: 0.25,
    //backgroundColor:"violet"
  },
  t1: {
    fontWeight: '700',
    fontSize: Text_Size.Text_size_Type_10,
    color: 'black',
    marginLeft: wp('22%'),
    marginTop: hp('0.2%'),
    fontFamily: 'san-serif',
  },

  v2: {
    flex: 0.3,
    // backgroundColor:"green",
    shadowColor: '#C995EC',
  },
  v2_1: {
    flexDirection: 'row',
    flex: 0.33,
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    elevation: 5,
    borderWidth: 0.4,
    borderColor: 'black',
  },
  v2_1_1: {
    flex: 0.2,
    //backgroundColor:"red"
  },
  img2: {
    marginLeft: wp('4%'),
    marginTop: hp('3%'),
  },
  v2_1_2: {
    flex: 0.6,
    // backgroundColor:"blue"
  },
  t2: {
    flex: 0.7,
    fontSize: Text_Size.Text_size_Type_11,
    fontWeight: '400',
    color: 'black',
    marginLeft: wp('1%'),
    marginTop: hp('3%'),
  },
  v2_1_3: {
    flex: 0.2,
    //  backgroundColor:"red"
  },
  img3: {
    marginLeft: wp('4%'),
    marginTop: hp('3%'),
  },
  v2_2: {
    flexDirection: 'row',
    flex: 0.33,
    //backgroundColor:"yellow",
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    elevation: 5,
    borderWidth: 0.4,
    borderColor: 'black',
  },
  v2_2_1: {
    flex: 0.2,
    //  backgroundColor:"red"
  },
  img4: {
    marginLeft: wp('4%'),
    marginTop: hp('3%'),
  },
  v2_2_2: {
    flex: 0.6,
    // backgroundColor:"blue"
  },
  t3: {
    flex: 0.7,
    fontSize: Text_Size.Text_size_Type_11,
    fontWeight: '400',
    color: 'black',
    marginLeft: wp('1%'),
    marginTop: hp('3%'),
  },
  v2_2_3: {
    flex: 0.2,
    //  backgroundColor:"red"
  },
  img5: {
    marginLeft: wp('4%'),
    marginTop: hp('3%'),
  },
  v2_3: {
    flexDirection: 'row',
    flex: 0.3,
    backgroundColor: 'gray',
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    elevation: 5,
    borderWidth: 0.4,
    borderColor: 'black',
  },
  v2_3_1: {
    flex: 0.2,
    // backgroundColor:"red"
  },
  t4: {
    flex: 0.7,
    fontSize: Text_Size.Text_size_Type_11,
    fontWeight: '400',
    color: 'black',
    marginLeft: wp('1%'),
    marginTop: hp('2.5%'),
  },
  v2_3_2: {
    flex: 0.6,
    // backgroundColor:"blue"
  },
  img6: {
    marginLeft: wp('4%'),
    marginTop: hp('2.5%'),
  },
  v2_3_3: {
    flex: 0.2,
    // backgroundColor:"red"
  },
  img7: {
    marginLeft: wp('4%'),
    marginTop: hp('2.5%'),
  },

  v3: {
    flex: 0.35,
    // backgroundColor:"orange"
  },
  // btn1:{
  //     flexDirection:"row",
  //     width: wp('35%'),
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
  t5: {
    flex: 0.7,
    //backgroundColor:"red",
    fontFamily: 'sans-serif',
    color: '#434343',
    fontWeight: 'bold',
    fontSize: Text_Size.Text_size_Type_9,
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
  },
  btn1_1: {
    flex: 0.3,
    // backgroundColor:"blue",
    marginTop: hp('1%'),
    marginLeft: wp('-1%'),
  },
});
