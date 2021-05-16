//importing dependencies
import * as React from 'react';
import {View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {Header, Badge, Input, Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {createStackNavigator} from '@react-navigation/stack';

//importing screens
import IDCardScreen from './IDCardScreen';
import AutomobilesScreen from './AutomobilesScreen';

//importing icons
import { SimpleLineIcons } from '@expo/vector-icons';

export default class ForumScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = {"#000000"}
                containerStyle = {styles.header}
                centerComponent = {{
                    text: 'Forum',
                    style: {color:'#07B9FD', fontSize: RFValue(30), fontWeight: 'bold'},
                }}
                leftComponent = {{icon: 'drawer', color:'#ffffff'}}
                />
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("Login")
                }}
                >
                    <Text style= {{justifyContent: 'center'}}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={()=>{
                    this.props.navigation.navigate("IDCard")
                }}
                style = {styles.button}
                >
                    <Text>To ID Cards Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress ={()=>{
                    this.props.navigation.navigate("PostYourTopic")
                }}
                style = {styles.button}
                >
                    <Text>To Post your topic Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "#ffffff",
        alignItems: 'center',
    },
    header : {
        flex:0.1,
        width:RFValue(500),
        justifyContent: 'flex-start'
    },
    button : {
        backgroundColor : "#00adb5",
        marginLeft : RFValue(13),
        borderWidth:RFValue(2),
        borderColor:"#fff",
        width:RFValue(150),
        justifyContent:'center',
        alignItems:'center',
        marginTop : RFValue(20),
        borderRadius:RFValue(5),
        height : RFValue(110),
    },
})