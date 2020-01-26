import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet} from 'react-native'
import {width,height} from 'react-native-dimension';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const row1 =[
    {title:"File Claims",image:require("../asset/fileclaim.png")},
    {title:"View Claims",image:require("../asset/viewclaim.png")},
    {title:"Renew Insurance",image:require("../asset/renewinsurance.png")}
]

const row2 =[
    {title:"Service At Home",image:require("../asset/service.png")},
    {title:"Service Center Near Me",image:require("../asset/servicecenter.png")},
    {title:"Learn More...",image:require("../asset/learnmore.png")}
]


export default class Main extends Component {

    onMenuPressed(index){
        if(index === 0){
            Actions.personalinfo();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                     <View style={{width:width(80)}}>
                        <Image source={require("../asset/menu.png")} width={width(8)} height={height(8)} resizeMode="contain"/>
                        </View>
                        <Image source={require("../asset/avataricon.png")} width={width(8)} height={height(8)} resizeMode="contain"/>
                </View>
                <View style={styles.maincontent}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.cardstyle}>
                                        <Image source={require("../asset/banner1.png")} width={width(34)} height={height(14)} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardstyle}>
                                        <Image source={require("../asset/banner2.png")} width={width(34)} height={height(14)} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardstyle}>
                                        <Image source={require("../asset/banner2.png")} width={width(34)} height={height(14)} resizeMode="contain"/>
                            </TouchableOpacity>

                    </ScrollView>
                    <View style={{width:width(85),height:height(45),alignItems:"center",justifyContent:"center"}}>
                        <View style={{height:height(20),width:width(85),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                            {row1.map((val,index) => {
                                return(
                                    <TouchableOpacity key={index} onPress={this.onMenuPressed.bind(this,index)} style={{alignItems:"center",justifyContent:"center",height:height(20),width:width(25),borderWidth:1,borderColor:"#EFEFEF"}}>
                                    <Image source={val.image} width={width(28)} height={height(15)} resizeMode="contain"/>
                                    <View style={{width:width(28),alignItems:"center",justifyContent:"center",marginTop:10}}>
                                    <View style={{width:width(15),height:height(5),alignItems:"center",justifyContent:"center"}}>
                                    <Text>{val.title}</Text>
                                    </View>
                                    </View>
                                  
                                </TouchableOpacity>
                                )
                            })}

                        </View>
                        <View style={{height:height(20),width:width(85),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                            {row2.map((val,index) => {
                                return(
                                    <TouchableOpacity key={index}  onPress={this.onMenuPressed.bind(this,index)} style={{alignItems:"center",justifyContent:"center",height:height(20),width:width(25),borderWidth:1,borderColor:"#EFEFEF"}}>
                                    <Image source={val.image} width={width(28)} height={height(15)} resizeMode="contain"/>
                                    <View style={{width:width(28),alignItems:"center",justifyContent:"center",marginTop:10}}>
                                    <View style={{width:width(15),height:height(5),alignItems:"center",justifyContent:"center"}}>
                                    <Text>{val.title}</Text>
                                    </View>
                                    </View>
                                  
                                </TouchableOpacity>
                                )
                            })}

                        </View>
                    </View>
                    <View style={{width:width(95),height:height(20)}}>
                       <Text style={{fontSize:16,fontWeight:"bold",color:"#4C92B7"}}>
                       Featured Service Centres
                       </Text>
                       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.bottomcardstyle}>
                                        <Image source={require("../asset/bottombanner1.png")} width={width(44)} height={height(7)} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bottomcardstyle}>
                                        <Image source={require("../asset/bottombanner2.png")} width={width(44)} height={height(7)} resizeMode="contain"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bottomcardstyle}>
                                        <Image source={require("../asset/bottombanner2.png")} width={width(44)} height={height(7)} resizeMode="contain"/>
                            </TouchableOpacity>

                    </ScrollView>

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#fff"
      
    },
    topBar:{
        height:height(8),
        flexDirection:"row",
        width:width(100),
        alignItems:"center",
        justifyContent:"center"
    },
    maincontent:{
        width:width(99),
        alignItems:"center",
        justifyContent:"center"
    },
    cardstyle:{
        elevation:8,
        marginRight:width(5),
        marginLeft:width(3),
      shadowColor: '#707070',
      shadowRadius:15,
      shadowOpacity:0.75,
      elevation:8,
      shadowOffset: { height: 15, width: 15 }
    },
    bottomcardstyle:{
        elevation:8,
        marginLeft:width(3),
      shadowColor: '#707070',
      shadowRadius:15,
      shadowOpacity:0.75,
      elevation:8,
      shadowOffset: { height: 15, width: 15 }
    }
})