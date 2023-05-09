import React from 'react';
import { View ,StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const AppLoader = ()=>{
    return(
        <View style={[ StyleSheet.absoluteFillObject,styles.container]}>
            <AnimatedLottieView source={require('./Images/loading.json')} autoPlay loop/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black',
      zIndex:1,
    }
})

export default AppLoader;