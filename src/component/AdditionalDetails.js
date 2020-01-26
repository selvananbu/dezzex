import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,Image ,Switch} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

export default class AdditionalDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            noofpeople:1,
            ishospital:false
        }
    }
    onAddPressed(){
        this.setState({noofpeople:this.state.noofpeople+1})
    }
    onRemovePressed(){
        if(this.state.noofpeople <= 1)
                this.setState({noofpeople:0})
        else
                this.setState({noofpeople:this.state.noofpeople-1})

    }
    onSecuredPressed(){

    }
    onContinuePressed(){
        Actions.claimreport();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",width:width(70),height:height(8),marginTop:height(2)}}>
                    
                    <Text style={{fontSize:16,fontWeight:"900"}}>
                    Was a police report filed?
                    </Text>
                    <Switch
                             onValueChange = {this.onSecuredPressed.bind(this)}
                             value = {this.state.secured}
                             thumbColor="#4C92B7"
                             style={{ transform: [{ scaleX: 1 }, { scaleY: 1}] }}
                             trackColor={{true: '#4C92B7 ', false: '#A9D2A0'}}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Name of police officer
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Name of police Dept
                    </Text>
                    </View>
                    <TextInput style={styles.textinput}/>
                </View>
                <View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Name of police Dept
                    </Text>
                    </View>
                    </View>
                    <View style={{width:width(70),flexDirection:"row",marginTop:height(2)}}>
                            <View style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                                <Text style={{fontSize:16}}>
                                People
                                </Text>
                            </View>

                            <TouchableOpacity style={{width:width(5)}} onPress={this.onRemovePressed.bind(this)}> 
                          
                          <Image source={require("../asset/remove.png")} style={{width:width(5),height:width(5),borderRadius: width(5)/2}} resizeMode="contain"/>    
                            </TouchableOpacity>

                            <View style={{width:width(8),alignItems:"center",justifyContent:"center"}}>
                                <Text>{this.state.noofpeople}</Text>
                            </View>

                            <TouchableOpacity style={{width:width(5),alignItems:"center",justifyContent:"center"}} onPress={this.onAddPressed.bind(this)}> 
                          
                          <Image source={require("../asset/add.png")} style={{width:width(5),height:width(5),borderRadius: width(5)/2}} resizeMode="contain"/>    
                            </TouchableOpacity>

                    </View>
                    <View style={{width:width(70),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                    Was anyone taken to the hospital?
                    </Text>
                    </View>
                    {this.state.ishospital
                    ?
                    <View style={{width:width(70),height:height(8),flexDirection:"row",marginTop:height(2)}}>
                        <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:"#A9D2A0",alignItems:"center",justifyContent:"center",width:width(10)}}>
                            <Text style={{fontSize:16}}>
                                Yes
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{opacity:0.5,alignItems:"center",justifyContent:"center",width:width(10)}}>
                            <Text style={{fontSize:16}}>
                                No
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{width:width(70),height:height(8),flexDirection:"row"}}>
                    <TouchableOpacity style={{opacity:0.5,alignItems:"center",justifyContent:"center",width:width(10)}}>
                        <Text style={{fontSize:16}}>
                            Yes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:"#A9D2A0",width:width(10)}}>
                        <Text style={{fontSize:16}}>
                            No
                        </Text>
                    </TouchableOpacity>
                </View>
                    }
                </View>
                <View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
                    <View style={{width:width(70)}}>
                    <Text style={styles.text}>
                        Comments
                    </Text>
                    </View>
                    <TextInput style={styles.textinputbig}/>
                    </View>
                    <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Continue</Text>
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
    textinputbig:{
        shadowColor: '#707070',
      shadowRadius:5,
      shadowOpacity:0.75,
      elevation:4,
      backgroundColor:"#fff",marginTop:10,
      width:width(70),
      height:height(10),
      borderRadius:5
    },
    text:{
        fontSize:14,
        fontWeight:"bold"
    }
})