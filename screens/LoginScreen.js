//importing required dependencies
import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Badge, Input, Divider} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

//importing icons
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//importing pictures
var logo = require("../assets/adaptive-icon.png");
var logo2 = require("../assets/logo.png");
 

export default class LoginScreen extends React.Component{
constructor(){
    super()
    //states
    this.state={
        email: '',
        password: '',
        secureTextEntry : true,
        iconName : 'eye',
    }
}

//method for logging in
userLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response=>{
        Alert.alert("Successfully Signed In")
        this.props.navigation.navigate("Forum")
    })
    .catch(error=>{
        var errorCode = error.code 
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
}

//method for user to reset the password incase they forget it
userForgotPassword=(email)=>{
    return firebase.auth().sendPasswordResetEmail(email)
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
            <View style = {styles.container}>
                <Image source = {logo} style = {styles.image}/>
                <Text style = {styles.headerText}>Account Login</Text>
                <Text style = {styles.label1}>Email Address</Text>
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"abc@abc.com"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                leftIcon = {<Zocial name="email" size={30} color="#07B9FD" />}
                leftIconContainerStyle = {styles.emailIcon}
                keyboardType = {"email-address"}
                allowFontScaling = {true}
                autoCapitalize = {"none"}
                onChangeText={(text)=>{
                    this.setState({
                        email:text
                    })
                }} />
                <Text style = {styles.label2}>Password</Text>
                <Input  {...this.props}
                containerStyle = {styles.inputBox2}
                placeholder = {"******"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                allowFontScaling = {true}
                autoCorrect = {false}
                clearTextOnFocus = {true}
                autoCapitalize = {"none"}
                leftIcon = {<FontAwesome name="lock" size={35} color="#07B9FD"/>}
                leftIconContainerStyle = {styles.passwordIcon}
                secureTextEntry = {this.state.secureTextEntry}
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
                        password:text
                    })
                }} />
                {/*LOGIN Button */}
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.userLogin(this.state.email, this.state.password)
                }}
                >
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                 {/* Button to go to signup screen */}
                 <TouchableOpacity
                onPress = {()=>{
                    this.props.navigation.navigate("Signup")
                }}
                >
                    <Text style = {{marginTop: RFValue(10)}}>Not logged in? Create an Account</Text>
                </TouchableOpacity>

                {/* Adding Divider for the entire screen */}
                <Text style= {{color: 'grey', marginTop: RFValue(10)}}>────────────  OR  ────────────</Text>

                {/* Google sign in button */}
                <TouchableOpacity 
                style = {styles.button2}
                onPress = {()=>{
                    
                }}
                >
                    
                    <Text style = {styles.buttonText}><AntDesign name="google" size={30} color="white" justifyContent = 'center' flexDirection = 'row' />Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:'center',
        justifyContent: 'flex-start',
    },
    header : {
        marginTop: RFValue(0),
        flex:0.1,
    },
    headerText : {
    fontSize: RFValue(30),
    textAlign: 'center',
    fontWeight: 'bold',
    padding: RFValue(40),
    color: '#07B9FD',
    },
    inputBox:{
        backgroundColor : '#E5E7EB',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width: RFValue(300),
        padding:RFValue(5),
        height: RFValue(50),
    },
    inputBox2:{
        backgroundColor : '#E5E7EB',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width: RFValue(300),
        padding:RFValue(5),
        height: RFValue(50),
    },
    emailIcon : {
        marginLeft : RFValue(0),
        marginRight : RFValue(5),
    },
    image : {
        width: RFValue(250),
        height: RFValue(200),
    },
    passwordIcon : {
        marginLeft: RFValue(3),
        marginRight : RFValue(5)
    },
    label1: {
        alignSelf: 'flex-start',
    },
    label2: {
        alignSelf: 'flex-start',
        marginTop: RFValue(10),
    },
    button : {
        backgroundColor : "#07B9FD",
        borderWidth:RFValue(2),
        borderColor:"#07B9FD",
        justifyContent:'center',
        alignItems:'center',
        width: RFValue(300),
        height: RFValue(40),
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    button2 : {
        backgroundColor : "#07B9FD",
        borderWidth:RFValue(2),
        borderColor:"#07B9FD",
        justifyContent:'center',
        alignItems:'center',
        width: RFValue(300),
        height: RFValue(50),
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    buttonText:{
        color:"#fff",
        fontSize:RFValue(15),
        justifyContent: 'center',
    },
})