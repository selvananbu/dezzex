import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class AnotherDriver extends Component {
    onContinuePressed(){
        Actions.additionaldetails();
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require("../asset/bg.png")}>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Driver's Name
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Contact Number
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Driver's Address
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Car Number
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Continue</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#fff",
      alignItems:"center"
      
    },
    textinput:{
        shadowColor: '#707070',
      shadowRadius:5,
      shadowOpacity:0.75,
      elevation:4,
      backgroundColor:"#fff",marginTop:10,
      width:width(70),
      borderRadius:5
    },
    text:{
        fontSize:18,
        fontWeight:"900"
    }
})