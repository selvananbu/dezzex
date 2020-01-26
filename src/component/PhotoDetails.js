import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,ImageBackground} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {width,height} from 'react-native-dimension';
import { Actions } from 'react-native-router-flux';

const options = {
    title: 'Select Avatar',
    // rotation:180,
    cameraType:"front",
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  
export default class PhotoDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            imagelist:[]
        }
    }

    onAddPressed(){
        ImagePicker.showImagePicker(options, (response) => {
          
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response };
              console.log('Response = ', response);
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };

              var list = this.state.imagelist;
              list.push(source);
          
              this.setState({
                imagelist: list,
              });
            }
          });   
    }
    onImageDeleted(index){
      var list = this.state.imagelist;
      list.splice(index,1);
      this.setState({
        imagelist: list,
      });
    }
    onContinuePressed(){
      Actions.accideentfinaldetails({image:this.state.imagelist});
      
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:width(90),height:height(60),alignItems:"center",justifyContent:"center"}}>
                {this.state.imagelist.length > 0
                ?
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.imagelist.map((val,idx) =>{
                       return(
                        <View key={idx} >
                        <ImageBackground   imageStyle={{ borderRadius: 25 }} source={val.uri} style={{width:width(80),height:height(20),borderRadius:25,marginBottom:height(2),alignItems:"flex-end",justifyContent:"flex-end"}}>
                          <TouchableOpacity onPress={this.onImageDeleted.bind(this,idx)} style={{width:width(8),height:width(8),backgroundColor:"#fff",borderRadius:width(8)/2,margin:height(2),alignItems:"center",justifyContent:"center"}}>
                              <Image source={require("../asset/delete.png")} width={width(5)} height={height(3)} resizeMode="contain"/>

                          </TouchableOpacity>
                        </ImageBackground>
                       </View>
                       ) 
                    })}
           
                </ScrollView>
                :
                <View/>
                }
                  
                </View>
                <View style={{width:width(90),height:height(18),alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={this.onAddPressed.bind(this)}> 
                          
                          <Image source={require("../asset/addicon.png")} style={{width:width(8),height:width(8),borderRadius: width(8)/2,
                          marginBottom:height(2)}} resizeMode="contain"/>    
                            </TouchableOpacity>
                </View>
                <View style={{width:width(95),height:height(10),alignItems:"center",justifyContent:"center"}}>
                    <ImageBackground source={require("../asset/buttonbg.png")}  width={width(70)} height={height(8)} style={{alignItems:"center",justifyContent:"center"}}>
                        <TouchableOpacity style={{width:width(70),height:height(8),alignItems:"center",justifyContent:"center"}} onPress={this.onContinuePressed.bind(this)}>
                        <Text style={{fontSize:18,fontWeight:"bold",color:"#fff"}}>Start Assesment</Text>
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