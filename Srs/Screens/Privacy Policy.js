import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, navigation, TextInput,ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';


const Pp = ({navigation }) => {
    
    return (
        <><StatusBar
            translucent={true}
            backgroundColor={'transparent'}
            barStyle='dark-content'
            hidden={false} />
            <SafeAreaView style={[styles.container]}>
            <ScrollView style={styles.scrollView}> 
            
            <Text style={styles.t1}>
                1.Controllers of Personal Information
            </Text>

            <Text style={styles.t2}> 
                1.1 AquaMate Works Private Limited is the Data Controller of Personal Information collected and processed 
                for providing the Services.
          </Text>
            <Text style={styles.t1}>
                2.What the Company collects from you
            </Text>

            <Text style={styles.t2}> 
                2.1 Any Personally Identifiable Information  that we collect from you, with your consent, that relates to you, 
                which includes your name, gender, phone number, email address,in furtherance to  Services being offered by us.
                 </Text>
                <Text style={styles.t2}>
                2.2 We may also collect recurring information of your geographic locations on a continuous basis in furtherance
                 to the services being provided by us.
                </Text>

            <Text style={styles.t1}>
                3.Purpose of information collected
            </Text>

                <Text style={styles.t2}>
                3.1 To effectively provide the Services;
                </Text>
                <Text style={styles.t2}>
                 3.2 For the purposes of software verification or administering software upgrades;
                </Text>
                <Text style={styles.t2}>
                 3.3 To maintain the quality of the Services and provide general statistics regarding their use;
                </Text>
                <Text style={styles.t1}>
                4.Sharing of the collected information
               </Text>

            <Text style={styles.t2}> 
                4.1 With Company’s affiliates and Service Providers, as required, to provide the Services;
            </Text>
                <Text style={styles.t2}>
                4.2 With the Company’s affiliates in connection with matters relating to the consumption of Services by you
                 to help detect and prevent identity theft, fraud and other potentially illegal acts;
                </Text>
                <Text style={styles.t2}>
                 4.3 If required to do so by law or regulation; to its legal counsel, law enforcement officers, governmental 
                 authorities who have asserted their lawful authority to obtain the information 
                </Text>

                <Text style={styles.t1}>
                5.Modifications
            </Text>

            <Text style={styles.t2}> 
                5.1 Any modification to this Privacy Notice by the Company would be in accordance with the Applicable Laws 
                to reflect such modification so that you are always aware of what information Company
                 collects.

             </Text>
                <Text style={styles.t2}>
                5.2 you are requested to periodically visit this page for the latest information on Company privacy practices. 
                Once posted, those changes are effective immediately. 
                </Text>
                <Text style={styles.t1}>
                6.Questions/Grievances
            </Text>
            <Text style={styles.t2}> 
                6.1 In the event of query or clarification regarding this Privacy Notice you may write to the 
                email address: 20pa1a5452@vishnu.edu.in
             </Text>
                <Text style={styles.t2}>
                6.2 In the event, you have grievances with respect to your Personal Information, you may write 
                to the email address: 20pa1a5452@vishnu.edu.in
                </Text>
 </ScrollView> 
</SafeAreaView>
</>
)
}
export default Pp
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
    fontSize: 16,
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