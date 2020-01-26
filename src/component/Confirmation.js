import React, { Component } from 'react'
import { Text, View,ImageBackground ,Image ,StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class Confirmation extends Component {

    onContinuePressed(){
        Actions.home();
    }
    render() {
        return (
            <View style={styles.container}>
                 <Image source={require("../asset/final1.png")} style={{width:width(99),height:height(70)}} resizeMode="contain"/>
                 <View style={{width:width(95),height:height(12),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Done</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center"
      
    },
})