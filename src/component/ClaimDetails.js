import React, { Component} from 'react'
import { Text, View,ImageBackground ,Image ,StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class ClaimDetails extends Component {

    onContinuePressed(){
        Actions.confirmation();
    }
    render() {
        return (
            
            <ImageBackground style={styles.container} source={require("../asset/bg.png")}>
                <Image source={require("../asset/success.png")} width={width(95)} height={height(50)} style={{marginTop:height(5)}} resizeMode="contain"/>
                <View style={{height:height(50),alignItems:"center",marginTop:height(10)}}>
                    <View style={{flexDirection:"row",width:width(60),justifyContent:"space-between"}}>
                        <Text style={{fontSize:20}}>
                            Claim Number
                        </Text>
                        <Text style={{fontSize:20,color:"#4C92B7"}}>
                            1234568
                        </Text>
                    </View>
                    <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>View Claim Status</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                </View> 
        
            </ImageBackground>
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