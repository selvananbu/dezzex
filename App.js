/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {width,height} from 'react-native-dimension';
import Home from './src/component/Home'
import PersonalInformation from './src/component/PersonalInformation'
import AccidentDetails from "./src/component/AccidentDetails";
import PhotoDetails from "./src/component/PhotoDetails";
import AccidentFinalDetails from './src/component/AccidentFinalDetails';
import AnotherDriver from './src/component/AnotherDriver';
import AdditionalDetails from './src/component/AdditionalDetails';
import ClaimDetails from './src/component/ClaimDetails';
import Confirmation from './src/component/Confirmation';
import Login from './src/component/Login';
import OtpVerification from './src/component/OtpVerification';



import { Router, Scene } from 'react-native-router-flux';

const App = () => {
  return (
    <Router>
    <Scene key="root">
      <Scene key="home"
        component={Home}
        hideNavBar={true}
      />
    <Scene key="personalinfo"
       component={PersonalInformation}
      //  initial
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Your Information</Text>
         </View>}
      />
        <Scene key="accidentdetails"
       component={AccidentDetails}
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Accident Details</Text>
         </View>}
      />
       <Scene key="photodetails"
       component={PhotoDetails}
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Attachement Details</Text>
         </View>}
      />
         <Scene key="accideentfinaldetails"
       component={AccidentFinalDetails}
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Damage Analayser</Text>
         </View>}
      />
           <Scene key="anotherdriver"
       component={AnotherDriver}
       
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Another Driver's Details</Text>
         </View>}
      />
       <Scene key="additionaldetails"
       component={AdditionalDetails}
       
      
       renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
         <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Additional Info</Text>
         </View>}
      />  
       <Scene key="claimreport"
      component={ClaimDetails}
      
      renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Claim Filed</Text>
        </View>}
     />
      <Scene key="confirmation"
      component={Confirmation}
      initial
      renderTitle={<View style={{width:width(70),alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:16,color:"#4C92B7",fontWeight:"bold"}}>Confirmation</Text>
        </View>}
     />
        <Scene key="login"
      component={Login}
      initial
    hideNavBar={true}
     />
     <Scene key="otpverification"
     component={OtpVerification}
   hideNavBar={true}
    />
      </Scene>
  </Router>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
