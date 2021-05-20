//importing dependencies
import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, KeyboardAvoidingView, Button, Alert, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

//importing images from assets
var logo = require('../assets/icon.png')

//importing icons
import { MaterialIcons } from '@expo/vector-icons';
import RootDrawer from '../components/RootDrawer';

export default class SplashScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
               <StatusBar barStyle='light-content' />
               <View style = {styles.header}>
                   <Animatable.Image 
                    animation = 'bounceIn'
                    duration = {1500}
                    source = {logo}
                    style = {styles.logo}
                    resizeMode = {'stretch'}
                   />
               </View>
               <Animatable.View 
               style = {styles.footer}
               animation = "fadeInUpBig"
               duration = {800}
               >
                   <Text style= {styles.title}>Where society helps each other</Text>
                   <Text style= {styles.text}>Sign in with account</Text>
                   <View style= {styles.button}> 
                   <TouchableOpacity 
                   onPress = {()=>{this.props.navigation.navigate("Login")}}
                   >
                    <LinearGradient 
                    colors={['#5db8fe', '#39cff2']}
                    style = {styles.login}>
                        <Text style = {styles.buttonText}>Get Started</Text>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </LinearGradient>
                    </TouchableOpacity>
                   </View>
               </Animatable.View>
            </View>
        )
    }
}

const {height} = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4
const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#05375A",
    },
    header:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex:1,
        backgroundColor: 'white',
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        paddingVertical: RFValue(50),
        paddingHorizontal: RFValue(30)
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: RFValue(100),
        borderColor: '#07B9FD',
        borderWidth: RFValue(5)
    },
    title: {
        color: '#05375A',
        fontWeight: 'bold',
        fontSize: RFValue(30),
    },
    text: {
        color: 'gray',
        marginTop: RFValue(5),
    },
    button: {
        alignItems: 'flex-end',
        marginTop: RFValue(30),
    },
    login: {
        width: RFValue(150),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(20),
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(15)
    }
})