//importing required dependencies
import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView, Modal, ImageBackground, KeyboardAvoidingView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import {Input} from 'react-native-elements';
import db from '../config';

//importing require pictures
var logo = require("../assets/icon.png")
var logo2 = require('../assets/adaptive-icon.png')

//importing required icons
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';

export default class LoginScreen extends React.Component{
constructor(){
    super()
    //states
    this.state={
        email: '',
        password: '',
        confirmPassword: '',
        secureTextEntry: true,
        iconName: 'eye',
    }
}

//method to create a new account for the user
userSignUp= (email,password,confirmPassword)=>{
    if(password!==confirmPassword){
        return Alert.alert("Passwords don't match")
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(response=>{
        db.collection("users").add({
            email_id : this.state.email,
        })
        this.props.navigation.navigate("SignIn")
        return Alert.alert("User Added Successfully")
    })
    .catch(error=>{
        var errorCode = error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
    this.props.navigation.navigate("Login")
}
}

//method to toggle the state for securetext entry of password
onPasswordIconPress=()=>{
    let iconName = (this.state.secureTextEntry) ? 'eye-off' : 'eye';
    this.setState({
        secureTextEntry : !this.state.secureTextEntry,
        iconName: iconName,
    })
}

    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} behaviour = "padding">
                <Image source = {logo2} style = {styles.image}/>
                <Text style = {styles.headerText}>Create Account</Text>
                <Text style = {styles.label1}>Email Address</Text>
                <Input
                containerStyle = {styles.inputBox}
                placeholder = {"abc@abc.com"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                leftIconContainerStyle = {styles.emailIcon}
                leftIcon = {<Zocial name="email" size={30} color="#07B9FD" />}
                keyboardType = {"email-address"}
                allowFontScaling = {true}
                autoCapitalize = {"none"}
                onChangeText={(text)=>{
                    this.setState({
                        email:text
                    })
                }}
               />
               <Text style = {styles.label1}>Password</Text>
               <Input
               containerStyle = {styles.inputBox}
               placeholder = {'**********'}
               clearButtonMode = {'while-editing'}
               placeholderTextColor = {'#393e46'}
               secureTextEntry = {this.state.secureTextEntry}
               leftIconContainerStyle = {styles.passwordIcon}
               leftIcon = {<FontAwesome name="lock" size={35} color="#07B9FD" />}
               rightIcon = {
                <TouchableOpacity 
                    onPress = {()=>{
                        this.onPasswordIconPress()
                    }}
                >
            <Icon name = {this.state.iconName} size = {30} color = "#07B9FD"/>
            </TouchableOpacity>
            }
               autoCapitalize = {"none"}
               onChangeText = {(text)=>{
                  this.setState({
                     password:text
               })
               }}
               />
               <Text style= {styles.label1}>Confirm Password</Text>
               <Input
               containerStyle = {styles.inputBox}
               placeholder = {'**********'}
               placeholderTextColor = {'#393e46'}
               autoCapitalize = {"none"}
               clearButtonMode = {"while-editing"}
               secureTextEntry = {this.state.secureTextEntry}
               leftIconContainerStyle = {styles.passwordIcon}
               leftIcon = {<FontAwesome name="lock" size={35} color="#07B9FD" />}
               rightIcon = {
                <TouchableOpacity 
                    onPress = {()=>{
                        this.onPasswordIconPress()
                    }}
                >
            <Icon name = {this.state.iconName} size = {30} color = "#07B9FD"/>
            </TouchableOpacity>
            }
               onChangeText = {(text)=>{
                    this.setState({
                       confirmPassword:text
               })
               }}
               />
               {/* Button to create account */}
               <TouchableOpacity
               style = {styles.button}
               onPress={()=>{
                   this.userSignUp(this.state.email,this.state.password, this.state.confirmPassword)
               }}
               >
                   <Text>Create Account</Text>
               </TouchableOpacity>
               {/* Button to go to login screen */}
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("Login")
                }}
                >
                    <Text>Already logged in? Log in here</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "#ffffff",
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#ffffff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    button2 : {
        backgroundColor :'#00adb5',
        borderWidth : RFValue(2),
        borderColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : RFValue(20),
        borderRadius : RFValue(20),
        width : RFValue(250),
        height: RFValue(40),
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
        fontStyle:'italic',
    },
    inputBox:{
        backgroundColor : '#E5E7EB',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width: RFValue(300),
        padding:RFValue(5),
        height: RFValue(50),
        marginTop: RFValue(0)
    },
    header:{
        flex:0.1,
        marginTop : -15,
        width : RFValue(500)
    },
    emailIcon : {
        marginLeft : RFValue(0),
        marginRight : RFValue(5)
    },
    passwordIcon : {
        marginLeft: RFValue(3),
        marginRight : RFValue(5)
    },
    image : {
        width: RFValue(250),
        height: RFValue(200),
    },
    label1: {
        alignSelf: 'flex-start',
        marginTop: RFValue(10)
    },
    label2: {
        alignSelf: 'flex-start',
        marginTop: RFValue(40),
    },
    headerText : {
        fontSize: RFValue(30),
        textAlign: 'center',
        fontWeight: 'bold',
        padding: RFValue(40),
        color: '#07B9FD',
        },
})