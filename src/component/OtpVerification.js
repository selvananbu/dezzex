import React, { Component } from 'react'
import { Text, View,ImageBackground ,Image ,StyleSheet,AsyncStorage} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
import CodeInput from 'react-native-confirmation-code-input';

export default class OtpVerification extends Component {
    constructor(props){
        super(props)
        this.state={
            isError:false
        }
    }
    onContinuePressed(){

    }
    _onFinishCheckingCode1(isValid){
        if(isValid){
            Actions.home();
            AsyncStorage.setItem("com.app.isloggedin","true");
        }
        else{
            this.setState({isError:true})
            var self = this;
            setTimeout(() => {
                self.setState({isError:false})
            },3000)
            this.refs.codeInputRef2.clear();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:width(90),alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}> OTP has been sent to your mobile number </Text>
                </View>
                <View style={{height:height(15)}}>
                <CodeInput
                    ref="codeInputRef2"
                    secureTextEntry
                    compareWithCode='1234'
                    activeColor='rgba(49, 180, 4, 1)'
                    inactiveColor='rgba(49, 180, 4, 1.3)'
                    autoFocus={false}
                    ignoreCase={true}
                    inputPosition='center'
                    size={50}
                    codeLength={4}
                    onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                    containerStyle={{ marginTop: height(10) }}
                    codeInputStyle={{ borderWidth: 1.5 }}
                    />
                </View>
                {this.state.isError
                    ?
                    <Text style={{fontSize:26,fontWeight:"bold",color:"red",marginTop:height(5)}}>Invalid Otp</Text>
                :
                <View/>
                }
                <Text style={{fontSize:16,color:"red",marginTop:height(5)}}>Didn't receive the otp?</Text>
                
                <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Submit</Text>
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
      justifyContent:"center",
      height:height(50)
      
    },
})