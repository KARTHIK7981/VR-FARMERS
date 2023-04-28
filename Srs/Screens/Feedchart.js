/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import {Row, Rows, Table, TableWrapper} from 'react-native-table-component';
import CustomSwitch from './Customswitch';

export default Fc = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    handleClick();
  }, []);
  const handleClick = async data => {
    setLoading(true);
    let value = data == 1 ? 'vanami' : 'dat';
    try {
      const response = await fetch(
        `https://back-server-3zs0.onrender.com/read/${value}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(json => setData(json));
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(data);
  const headers = ['Count', "Today's Price"];
  const rows = [
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={2}
          roundCorner={false}
          option1={'Option1'}
          option2={'Option2'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#91D129'}
        />
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: '#91D129',
            borderRadius: 50,
          }}
          style={{justifyContent: 'center', alignContent: 'center'}}>
          <Row
            data={headers}
            style={{
              borderBottomColor: 'black',
            }}
            height={40}
            flexArr={[1, 1]}
            textStyle={{
              textAlign: 'center',
            }}
          />
          <TableWrapper>
            <Rows
              data={rows}
              textStyle={{
                textAlign: 'center',
              }}
            />
          </TableWrapper>
        </Table>
      </View>
    </SafeAreaView>
  );
};
