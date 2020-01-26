import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,Animated,Easing,ImageBackground, ProgressBarAndroid} from 'react-native'
import { TouchableOpacity, ScrollView, FlingGestureHandler } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';
var bodyFormData = new FormData();
const axios = require('axios').default;


export default class AccidentFinalDetails extends Component {

    

    constructor(props){
        super(props);
        this.spinValue = new Animated.Value(0);
        this.state={
            isloading:true,
            damageIndex:1,
            isrepairable:true,
            data:[],
            image:''
        }
    }
    

    onAnimationComplete(){
        this.setState({isloading:false});
    }
    componentDidMount(){
        var self = this;
        if(this.props.image !== undefined){
            var fileName= this.props.image[0];
          
            var photo = {
                uri: fileName.uri.uri,
                type: fileName.uri.type,
                name: fileName.uri.fileName,
              };
              console.log(photo);

            bodyFormData.append('file', photo); 
            axios({
                method: 'post',
                url: 'http://54.172.124.216:4000/main/upload',
                data: bodyFormData,
                })
                .then(function (response) {
                    //handle success
                    var data = response.data.data;
                   if(data !== undefined){
                       console.log(data);
                       var imageUrl = data.name;
                       axios.get(data.json)
                            .then(function (response) {
                                // handle success
                                
                                if(response.status === 200){
                                    var data = response.data
                                    console.log(JSON.stringify(data));
                                    self.setState({data:JSON.stringify(data),image:imageUrl})
                                 
                                }
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                            })
                            .then(function () {
                                // always executed
                            });

                       
                   }
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
            // const params = new URLSearchParams();
            // params.append('file', this.props.image[0])

            // axios.post("http://54.172.124.216:4000/main/upload",{
            //    file: fileName.uri.uri
            // }).then(function(response){
            //     console.log('====================================');
            //     console.log(response);
            //     console.log('====================================');
            //     this.setState({isloading:false});
            // })
            // .catch(function (response) {
            //         //handle error
            //         console.log(response);
            //     });
        }

       
    
// First set up animation 
        Animated.loop(
            Animated.timing(
            this.spinValue,
        {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear,
            useNativeDriver: true
        }
        ).start(this.onAnimationComplete.bind(this)))
    }

    onContinuePressed(){
        Actions.anotherdriver();
    }

// Second interpolate beginning and end values (in this case 0 and 1)


    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })

          
        return (
            <View style={styles.container}>
                      <View style={{height:height(20),alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:18,color:"#4C92B7",fontWeight:"bold"}}> Starting analysing the damage </Text>
                <Text style={{fontSize:16,color:"#4C92B7"}}> Please wait. It won't take long </Text>
                </View>

                <View style={{height:height(80)}}>
                    {this.state.isloading 
                    ?
                    <ProgressBarAndroid/>
                // <Animated.Image source={require("../asset/loading.png")}   style={{transform: [{rotate: spin}] }}
                // width={width(75)} height={height(40)} resizeMode="contain"/>
                :
                <View style={{alignItems:"center",width:width(99),height:height(80)}}>
              
                <Image source={{uri:this.state.image}}  style={{width:width(80),height:height(40)}} resizeMode="contain"/>
                <View style={{flexDirection:"column",width:width(90),height:height(10),marginTop:height(2)}}>
                    <View style={{width:width(30),height:height(10)}}>
                        <Text style={{fontSize:18,fontWeight:"bold"}}>
                            Damage Type
                        </Text>
                    </View>
                    <View style={{width:width(99),height:height(50)}}>
                    <Text style={{fontSize:16}}>
                                        {this.state.data}
                                </Text>
                        </View>
                    {/* {this.state.damageIndex === 1
                    ?
                    <View style={{width:width(60),height:height(10),flexDirection:"row"}}>

                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}} >
                            <Text style={{fontSize:16,opacity:0.50}}>
                                Minor
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center",borderBottomColor:"#A9D2A0",borderBottomWidth:0.5}}>
                            <Text style={{fontSize:16}}>
                                Moderate
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:16,opacity:0.50}}>
                                Sever
                            </Text>
                            </TouchableOpacity>
                          
                    </View>
                    :
                    this.state.damageIndex === 0
                    ?
                    <View style={{width:width(50),flexDirection:"row"}}>

                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center",borderBottomColor:"#A9D2A0",borderBottomWidth:0.5}}>
                            <Text style={{fontSize:16}}>
                                Minor
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:16,opacity:0.50}}>
                                Moderate
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:16,opacity:0.50}}>
                                Sever
                            </Text>
                            </TouchableOpacity>
                          
                    </View>
                    :
                    <View style={{width:width(50),flexDirection:"row"}}>

                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:16,opacity:0.5}}>
                                Minor
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:16,opacity:0.50}}>
                                Moderate
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:width(20),alignItems:"center",justifyContent:"center",borderBottomColor:"#A9D2A0",borderBottomWidth:0.5}}>
                            <Text style={{fontSize:16}}>
                                Sever
                            </Text>
                            </TouchableOpacity>
                          
                    </View>
                    }
                    
                </View>
                <View style={{width:width(65),height:height(8),marginTop:height(2), shadowColor: '#707070',alignItems:"center",justifyContent:"center",
      shadowRadius:5,
      shadowOpacity:0.75,
      elevation:4,
      backgroundColor:"#fff",borderRadius:12}}>
                {this.state.isrepairable
                    ?
                    <View style={{width:width(60),height:height(8),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                        <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:"#A9D2A0",alignItems:"center",justifyContent:"center",width:width(30)}}>
                            <Text style={{fontSize:16}}>
                                Replacement
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{opacity:0.5,alignItems:"center",justifyContent:"center",width:width(30)}}>
                            <Text style={{fontSize:16}}>
                                Repairable
                            </Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={{width:width(45),height:height(8),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                    <TouchableOpacity style={{opacity:0.5,alignItems:"center",justifyContent:"center",width:width(30)}}>
                        <Text style={{fontSize:16}}>
                            Replacement
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:"#A9D2A0",width:width(30)}}>
                        <Text style={{fontSize:16}}>
                            Repairable
                        </Text>
                    </TouchableOpacity>
                </View>
                    } */}
                </View>
                <View style={{width:width(95),height:height(15),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Continue</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                </View>
 
                    }
                    

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