/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity,StatusBar} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Graphswitch from './GraphSwitch';
import AppLoader from '../AppLoader';
import {displayPartsToString} from 'typescript';

function* yLabel() {
  yield* [200, 250, 300, 350, 400, 450];
}
let lis = [];
// eslint-disable-next-line no-undef
const Gs = () => {
  let values = [230, 250, 300, 350, 400, 450];
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('8u');
  const [value,setValue]=useState('8e');
  const [err, setErr] = useState('');

  useEffect(() => {
    handleClick();
  }, []);
  const handleClick = async (data = 'Vanami') => {
    setLoading(true);
    let value = data == 1 ? 'Vanami' : data == 2 ? 'BlackTiger' : 'Prawn';
    try {
      const response = await fetch(
        `https://back-server-3zs0.onrender.com/readGraph/${value}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('result is: ', JSON.stringify(result));
      let dynamicData = [
        parseInt(result.a),
        parseInt(result.b),
        parseInt(result.c),
        parseInt(result.d),
        parseInt(result.e),
        parseInt(result.f),
      ];
      let dynamicData2 =[
        parseInt(result.g),
        parseInt(result.h),
        parseInt(result.i),
        parseInt(result.j),
        parseInt(result.k),
        parseInt(result.l),
      ];
      console.log(`Dynamic Data ${dynamicData}`);
      console.log(`Dynamic Data ${dynamicData2}`);
      // lis = dynamicData;
      setData(dynamicData);
      setValue(dynamicData2);
    } catch (err) {
      setErr(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Instantiate the iterator
  const yLabelIterator1 = yLabel();
  const yLabelIterator2 = yLabel();
  const onSelectSwitch = async index => {
    return await handleClick(index);
  };
  return (
    <>
    <StatusBar
            translucent={true}
            backgroundColor={'#d9f8a7'}
            barStyle='dark-content'
            hidden={false} />
    {data=='8u' && value=='8e'? (
      <AppLoader/>
    ):(
    <View>
      <View style={{alignItems: 'center', margin: 20}}>
        <Graphswitch
          selectionMode={1}
          roundCorner={true}
          option1={'Vanami'}
          option2={'BlackTiger Prawn'}
          option3={'Prawn'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'blue'}
        />
      </View>
      <Text style={{fontSize: 25, fontWeight: 'bold', padding: 20}}>
        Count vs Price
      </Text>
            <LineChart
              data={{
                labels: [100, 90, 80, 70, 60, 48.5],
                datasets: [
                  {
                    // eslint-disable-next-line prettier/prettier
                    data: data,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              formatYLabel={() => yLabelIterator1.next().value}
              // yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(169,169,169, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />

      <Text style={{fontSize: 25, fontWeight: 'bold', padding: 20}}>
        Time vs Price
      </Text>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                ],
                datasets: [
                  {
                    // eslint-disable-next-line prettier/prettier
                    data: data,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={220}
              formatYLabel={() => yLabelIterator2.next().value}
              // yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255,165,0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(169,169,169, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
    </View>
  
    )}
        </>
  );
};
export default Gs;
