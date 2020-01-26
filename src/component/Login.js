import React, { Component} from 'react'
import { Text, View,ImageBackground ,Image ,StyleSheet,AsyncStorage,ActivityIndicator} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            isloggedin:false
        }
    }

    componentDidMount(){
            var self = this;
            AsyncStorage.getItem("com.app.isloggedin").then((value) => {
                console.log('====================================');
                console.log(value);
                console.log('====================================');
                if(value !== undefined && value !== null){
                    Actions.home();
                }
                else{
                    self.setState({isloggedin:true})
                }
            })
    }

    onContinuePressed(){
        Actions.otpverification();
    }
    render() {
        return (
            
            <ImageBackground style={styles.container} source={require("../asset/bg.png")}>
                {this.state.isloggedin
                ?
                <View style={{alignItems:"center",justifyContent:"center"}}>
                <Image source={require("../asset/mainicon.png")} width={width(95)} height={height(40)} style={{marginTop:height(5)}} resizeMode="contain"/>
                
                <View style={{height:height(50),alignItems:"center",marginTop:height(10)}}>
                    <View style={{flexDirection:"row",width:width(95),justifyContent:"cener",justifyContent:"center"}}>
                    <TextInput style={styles.textinput} placeholder={"Mobile Number"}/>
                    </View>
                    <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Sign In</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{flexDirection:"row",width:width(70),alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity style={{width:width(15)}} > 
                              <Image source={require("../asset/googleicon.png")} style={{width:width(8),height:width(8),borderRadius: width(8)/2}} resizeMode="contain"/>    
                        </TouchableOpacity>

                        <TouchableOpacity style={{width:width(15),alignItems:"center",justifyContent:"center"}} > 
                              <Image source={require("../asset/fbicon.png")} style={{width:width(8),height:width(8),borderRadius: width(8)/2}} resizeMode="contain"/>    
                        </TouchableOpacity>
                </View>
                </View> 
                </View>
                :
                <ActivityIndicator/>
                }
        
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
    textinput:{
        shadowColor: '#707070',
      shadowRadius:5,
      shadowOpacity:0.75,
      elevation:4,
      backgroundColor:"#fff",marginTop:10,
      width:width(70),
      borderRadius:5
    },   
})