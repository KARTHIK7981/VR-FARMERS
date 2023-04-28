/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

const Graphswitch = ({
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

  const updatedGraphData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View>
      <View
        style={{
          height: 50,
          width: 300,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedGraphData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            margin: 2,
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? 'white' : selectionColor,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedGraphData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedGraphData(3)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 3 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            margin: 2,
          }}>
          <Text
            style={{
              color: getSelectionMode == 3 ? 'white' : selectionColor,
            }}>
            {option3}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Graphswitch;
