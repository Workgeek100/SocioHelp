//importing all required dependencies
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
//importing all screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import ForumScreen from './screens/ForumScreen';
import IDCardScreen from './screens/IDCardScreen';
import AutomobilesScreen from './screens/AutomobilesScreen';
import PostYourTopicScreen from './screens/PostYourTopicScreen';
import UserForgotPasswordScreen from './screens/UserForgotPasswordScreen';
import RootStack from './components/RootStack';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default class App extends React.Component{
  render(){
    return(
      <RootStack />
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#ffffff",
    justifyContent: 'center',
    alignItems:'center',
  },
})