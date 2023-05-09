/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CustomText from './CustomText';
import Customdropdown from './Customdropdown';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppLoader from '../AppLoader';

 const Cl = () => {
  const [count, setCount] = useState('');
  const [bag, setBag] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [value, setValue] = useState('');
  const [visible, SetVisible] = useState(false);

  // Handler Functions to Set the Form values into State Variables
  const handleCountChange = inputText => {
    setCount(inputText);
  };
  const handleBagChange = inputText => {
    setBag(inputText);
  };

  // Function to Calculate the Value of Feed
  const onPressButton = () => {
    let kg = 25 * bag;
    let ratio = selectedItem === 'titan' ? 1.1 : 2.0;
    let number = Math.round(((((kg / ratio) * count)/100000) + Number.EPSILON) * 100) / 100;
    setValue(number);
    SetVisible(true);
  };
  // Function to change FeedValue into Rupees Format
  const toIndianCurrency = num => {
    const curr = num.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
    return curr;
  };
  return (
    <>
    <View >
       <View style={styles.container}>
       <Text style={styles.heading}>Feed Calculator</Text>
      <CustomText holder={'count'}  onChangeText={handleCountChange} />
      <CustomText holder={'Bags'} onChangeText={handleBagChange} />
       </View>
      <Customdropdown
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <View style={styles.button}>
        <Button title="Calculate" onPress={onPressButton} />
      </View>
      {/* Bottom Popup */}
      <Modal
        isVisible={visible}
        style={{width: '100%', marginLeft: 0, marginBottom: 0}}
        onBackButtonPress={() => {
          SetVisible(false);
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 200,
            backgroundColor: 'white',
            right: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Number in Lakhs</Text>
          <Text style={styles.lakh}>{value}L</Text>
        </View>
      </Modal>
    </View>

    </>
  );
};
export default Cl;
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop: 50,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  lakh: {
    fontSize: 30,
    display: 'flex',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  }
});
