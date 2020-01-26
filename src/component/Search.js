import React, { Component } from 'react'
import { Text, View,ImageBackground ,Image ,StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class Search extends Component {

    render() {
        return (
            <View style={styles.container}>
                 <Image source={require("../asset/claim.png")} width={width(99)} height={height(75)} style={{marginTop:height(5)}} resizeMode="contain"/>
               
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