import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput , ScrollView} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';


const Tc = ({navigation }) => {
    
    return (
        <><StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle='dark-content'
            hidden={false} />
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}> 
            
                <Text style={styles.t1}>
                    1.Applicability of the Terms
                </Text>

                <Text style={styles.t2}> 
                    1.1 The Terms of Use (“Terms”) herein sets out the terms and conditions for availing the Services offered by the 
                    Company by using the website and applications accessible at google play store.</Text>
                    <Text style={styles.t2}>
                    1.2 You hereby agree and acknowledge that by accessing or using the Services offered by the Company, 
                    you hereby expressly confirm that you have read, understood and agree to comply with and be bound by the Terms.</Text>
                    <Text style={styles.t2}>
                   1.3 In the event you do not agree to any or all of the Terms, you are requested to not access 
                    and use any of the Services offered by the Company or the Website. 
                    </Text>

                <Text style={styles.t1}>
                    2.Registartion
                </Text>

                <Text style={styles.t2}> 
                    2.1 Wherever applicable, you agree to sign up and create an authenticated account (“Account”) by providing 
                    all required information in order to access or use the Services (“Sign-up Process”). </Text>
                    <Text style={styles.t2}>
                    2.2 You agree and acknowledge that any and all activity undertaken by you from the Account shall be your sole 
                    responsibility and the Company shall not be responsible or liable for the same in any manner towards you or 
                    any other third-party.
                    </Text>
                    <Text style={styles.t2}>
                     2.3 In the event, the Company finds the information, so provided by you, to be untrue, inaccurate, outdated, or incomplete, then it shall
                        be entitled to terminate your Account.
                    </Text>

                <Text style={styles.t1}>
                    3.Eligibility to use the Services
                </Text>

                    <Text style={styles.t2}>
                    3.1 You have the required right, authority, license and/or permission; and

                    </Text>
                    <Text style={styles.t2}>
                     3.2 You are not engaged in any business which directly or indirectly (including through companies owned or controlled by you)
                      competes with our business or activities of the Company being conducted.;

                    </Text>

                    <Text style={styles.t1}>
                    4.Pricing and Payment for Services
                   </Text>

                <Text style={styles.t2}> 
                    4.1 Any payments due to the Company for the Services may be paid online via credit card, debit card, net banking, 
                    UPI payment, and/or through multiple online payment wallets such as Google Pay, Paytm, etcetera.
                </Text>
                    <Text style={styles.t2}>
                    4.2 You acknowledge that your payments shall also be governed by the terms and conditions of the respective 
                    payment methods/payment gateways.

                    </Text>
                    <Text style={styles.t2}>
                     4.3 You understand and agree that the details (whether of debit card, credit card, net banking, UPI payment 
                     or payment through online wallets) provided by you to make payments and transact on Website shall be correct, 
                     accurate.
                    </Text>

                    <Text style={styles.t1}>
                    5.Restrictions on use
                </Text>

                <Text style={styles.t2}> 
                    5.1 You shall not use the Services provided by the Website for any unlawful purpose or in violation 
                    of any applicable laws.
                 </Text>
                    <Text style={styles.t2}>
                    5.2 You shall not infringe the copyright, trademark, trade secret or other intellectual property rights 
                    of the Company or any third party or violate the privacy or other personal rights of the Company or any third party.
                    </Text>
                    <Text style={styles.t2}>
                     2.3 You shall not post any content that is false or misleading; harasses advocates harassment of another person.
                    </Text>
     </ScrollView> 
    </SafeAreaView>
    </>
    )
}
export default Tc
const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor:"red"
       // paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 0,
      },
      t1: {
        fontSize: 18,
        marginLeft:wp("3%"),
        color:"black",
        fontWeight:"400",
        marginTop:hp("1%")
      },
      t2:{
        fontSize: 12,
        marginLeft:wp("6%"),
        color:"black",
        fontWeight:"300",
        marginTop:hp("1%")
      }
    });