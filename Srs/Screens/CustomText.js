/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';


export default CustomText=({holder,onChangeText })=> {
  console.log('input');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder= {holder}
        placeholderTextColor="black"
        keyboardType="numeric"
        keyboardAppearance="light"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },container:{
    display:'flex',
    alignItems:'center',
  }
});
