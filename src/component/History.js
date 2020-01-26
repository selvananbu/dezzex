import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class History extends Component {
  static navigationOptions = {
    tabBarOptions: { showIcon: true},
    tabBarIcon: ({ tintColor }) => {
              return (<Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: "https://facebook.github.io/react/img/logo_og.png" }}/>);}
    }
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Coming Soon..... </Text>
      </View>
    );
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