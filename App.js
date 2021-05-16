//importing all required dependencies
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
//importing all screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import ForumScreen from './screens/ForumScreen';
import IDCardScreen from './screens/IDCardScreen';
import AutomobilesScreen from './screens/AutomobilesScreen';
import PostYourTopicScreen from './screens/PostYourTopicScreen';

const Drawer = createDrawerNavigator();

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignUpScreen},
  Forum: {screen: ForumScreen},
  PostYourTopic: {screen: PostYourTopicScreen},
  IDCard: {screen: IDCardScreen},
  Automobiles: {screen: AutomobilesScreen},
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#ffffff",
    justifyContent: 'center',
    alignItems:'center',
  },
})