import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import History from './History';
import Main from './Main';
import Search from './Search';




export default class Home extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Home'},
      { key: 'second', title: 'Search' },
      
      { key: 'third', title: 'History' }
    ],
  };
  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>

              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
 


  render() {
    return (
      <TabView
        navigationState={this.state}
        tabBarPosition="bottom"
        renderScene={SceneMap({
          first: Main,
          second: Search, 
          third:History
        })}
        style={{backgroundColor:"#fff"}}
        // renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});