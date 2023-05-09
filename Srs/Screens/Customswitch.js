/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Text, View, TouchableOpacity} from 'react-native';

const Cw = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  option3,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
  return (
    <View>
      <View
        style={{
          height:hp("7%"),
          width: wp("70%"),
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 45 : 0,
          borderWidth: 1.3,
          borderColor:"black",
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
              fontSize:15,
              fontWeight:"bold"
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
              fontSize:15,
              fontWeight:"bold"
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(3)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 3 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: getSelectionMode == 3 ? 'white' : selectionColor,
              fontSize:15,
              fontWeight:"bold"
            }}>
            {option3}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cw;