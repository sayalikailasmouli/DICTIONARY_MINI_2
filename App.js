import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style = {{flex:1}}> 
        <HomeScreen/>
      </View>
    )
  }
}

