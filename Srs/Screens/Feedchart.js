import { Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Button, StatusBar, styles, Linking } from 'react-native';
import { Row, Rows, Table, TableWrapper } from 'react-native-table-component';
import Cw from './Customswitch';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Text_Size from '../Textscaling';

export default Fc = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');
  const [err, setErr] = useState('');
  useEffect(()=>{
    handleClick();
  },[]);
  const handleClick = async (data=2) => {
    setLoading(true);
    let value = data == 1 ? 'vanami' : data == 2 ? 'BlackTiger' : 'tiger';
    try {
      const response = await fetch(
        `https://back-server-3zs0.onrender.com/read/${value}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('result is: ', JSON.stringify(result, null, 4));
      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  const headers = ['Count', "Today's Price"];
  let rows = [
    ['100C', data.a],
    ['90C', data.b],
    ['80C', data.c],
    ['70C', data.d],
    ['60C', data.e],
  ];
  const onSelectSwitch = async index => {
    return await handleClick(index);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <><StatusBar
        translucent={false}
        backgroundColor={'#d9f7a1'}
        barStyle='dark-content'
        hidden={false} />

        <View style={{ flex: 0.1, alignItems: 'center', padding: wp("8%"), top: 30 }}>
          {/* <Text style={{fontSize:20,fontWeight:"bold"}}>Price Trends</Text> */}
          <Cw
            selectionMode={2}
            roundCorner={false}
            option1={'Vanamei'}
            option2={'Black Tiger'}
            option3={'Tiger'}
            onSelectSwitch={onSelectSwitch}
            selectionColor={"#1E2761"}
            buttonTextStyle={{ fontSize: 18 }}

          />
        </View>
        <View style={{ flex: 0.6, padding: wp("8%"), }}>
          <Table
            borderStyle={{
              borderColor: 'black',
            }}
            style={{ justifyContent: 'center', alignContent: 'center', marginTop: hp("0%") }}>
            <Row
              data={headers}
              style={{
                borderColor: "black",
                height: 70,
                borderWidth: 1.25,
              }}
              height={60}
              flexArr={[1, 1]}
              textStyle={{
                textAlign: 'center',
                color: "black",
                fontSize: 20,
                fontWeight: "500"
              }}
            />
            <TableWrapper>
              <Rows
                data={rows}
                style={{
                  height: 60,
                  borderWidth: 1.25
                }}
                textStyle={{
                  textAlign: 'center',
                  color: "black",
                  fontSize: 18,
                  fontWeight: "400"

                }}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={{ flex: 0.1, }}>
          <Text style={{
            fontWeight: "bold",
            fontSize: Text_Size.Text_size_Type_11,
            color: "green",
            marginTop: hp("2%"),
            marginLeft: wp("10%")
          }} onPress={() => { Linking.openURL('tel:9390132374'); }}>Mobile Number: +91 9390132374</Text>
        </View>
        <View style={{ flex: 0.2 }}>
          <Text style={{ fontSize: Text_Size.Text_size_Type_6, padding: 20, fontWeight: "500", bottom: 20 }}>! We are always committed to
            bring you the lastest market price trends best in-time.You are requested to note that the prices mentioned..</Text>
        </View>
      </>
    </SafeAreaView>
  );
};