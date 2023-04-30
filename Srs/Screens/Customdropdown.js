/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {TextInput,Text, TouchableOpacity, View,StyleSheet, FlatList,Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Customdropdown = ({selectedItem, setSelectedItem}) => {
  const [selected, setSelected] = useState('Select');
  const [isClicked, setIsClicked] = useState(false);
  let dropdownItems = [
    'vanami',
    'titan',
    'korameenu',
    'black tiger',
  ];
  const [data,setData] = useState(dropdownItems);
  const onSearch=(txt)=>{
    if(txt!==''){
      let tempData = data.filter(item =>{
        return item.toLowerCase().indexOf(txt.toLowerCase())>-1;
      });
      setData(tempData);
    }
    else{
      setData(dropdownItems);
    }
  }
  const handleSelectItem = (item) => {
    setSelected(item);
    setIsClicked(false);
    onSearch('');
    setSelectedItem(item);
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.dropdownSelect}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Text>{selected}</Text>
        {isClicked ? (
          <Image source={require('../Images/upload.png')} style={styles.icon} />
        ) : (
          <Image source={require('../Images/dropdown.png')} style={styles.icon} />
        )}
      </TouchableOpacity>
      {isClicked ? (
        <View style={styles.dropdownArea}>
          <TextInput placeholder="Search" style={styles.searchInput}  onChangeText={(txt)=>{
            onSearch(txt);
          }}/>
          <FlatList data={data} renderItem={({item})=>{
            return(
              <TouchableOpacity style={styles.feedItem} onPress={()=> handleSelectItem(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )
          }}
           />
        </View>
      ) : null}
    </View>
  );
};
export default Customdropdown;

const styles = StyleSheet.create({
  dropdownSelect: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  dropdownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#ffff',
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop:20,
    paddingLeft:15,
  },
  feedItem:{
    width:'85%',
    height:50,
    borderBottomWidth:.2,
    borderBottomColor:'#8e8e8e',
    alignSelf:'center',
    justifyContent:'center'
  }
});
