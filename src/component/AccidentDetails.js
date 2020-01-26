import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,Image,
    Switch } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class AccidentDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            secured:true
        }
    }
    onContinuePressed(){
        Actions.photodetails();
    }
    onSecuredPressed(){
        this.setState({secured:!this.state.secured})
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require("../asset/bg.png")}>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Accident Date
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Accident Description
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    How was your vehicle damaged?
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Registration Number   
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    License Number
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(5),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Vehicle secured at the spot
                    </Text>
                    </View>
                    <View style={{width:width(70),alignItems:"flex-end"}}>
               
                             </View>
                             
                </View>
                <View style={{width:width(95),height:height(10),alignItems:"center",justifyContent:"center"}}>
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
        fontSize:14,
        fontWeight:"200"
    }
})