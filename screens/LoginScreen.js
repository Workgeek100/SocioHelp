//improting dependencies
import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar, StyleSheet, KeyboardAvoidingView, Button, Alert, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import Expo from 'expo';

//importing images from assets
var logo = require('../assets/icon.png')

//importing icons
import { MaterialIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default class LoginScreen extends React.Component{
constructor(){
    super();
    this.state = {
        email: '',
        password: '',
        iconName: 'eye',
        secureTextEntry: true,
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
                <Animatable.View 
                style = {styles.header}
                animation = 'fadeInUp'
                >
                    <Text style = {styles.textHeader}>Account Login</Text>
                </Animatable.View>
                <Animatable.View 
                style = {styles.footer}
                animation = 'fadeInUpBig'
                >
                <Input 
                containerStyle = {styles.inputBox}
                placeholder = {"Email Address"}
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
                <Input
                containerStyle = {styles.inputBox2}
                placeholder = {"Password"}
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

                {/* Button to reset password screen */}
                <TouchableOpacity
                onPress = {()=>{
                    this.props.navigation.navigate("UserForgotPassword")
                }}
                >
                 <Text style = {styles.underline}>Forgot password?</Text>
                </TouchableOpacity>

                {/*LOGIN Button */}
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.userLogin(this.state.email, this.state.password)
                }}
                >
                    <LinearGradient 
                    colors={['#5db8fe', '#39cff2']}
                    style = {styles.login}>
                        <Text style = {styles.text}>LOGIN</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* Adding Divider for the entire screen */}
                <Text style= {{color: 'grey', marginTop: RFValue(10),}}>────────────  OR  ────────────</Text>

                {/* Google sign in button */}
                <TouchableOpacity
                style = {{marginTop: RFValue(10)}}
                onPress={()=>{

                }}
                >   
                    <LinearGradient 
                        colors={['#5db8fe', '#39cff2']}
                        style = {styles.login}>
                        <Text style = {styles.buttonText}><AntDesign name="google" size={30} color="white" justifyContent = 'center' flexDirection = 'row' />Sign in with Google</Text>                     
                    </LinearGradient>
                    
                </TouchableOpacity>

                {/* Adding second Divider for the entire screen */}
                <Text style= {{color: 'grey', marginTop: RFValue(10), alignSelf: 'center'}}>──────────────────────────</Text>

                {/* Button to go to signup screen */}
                
                <TouchableOpacity
                   onPress = {()=>{this.props.navigation.navigate("Signup")}}
                   >
                    <LinearGradient 
                    colors={['#fff', '#fff', ]}
                    style = {styles.signup}>
                        <Text style = {styles.text2}>Don't have an account? Create one</Text>
                        <MaterialIcons name="navigate-next" size={30} color="white" />
                    </LinearGradient>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#05375A",
        justifyContent: 'center',
    },
    header : {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(50),
    },
    footer :{
        flex:3,
        backgroundColor: 'white',
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(30),
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(30),
    },
    login: {
        width: RFValue(300),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(5),
        flexDirection: 'row',
    },
    signup: {
        width: RFValue(300),
        height: RFValue(40),
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: RFValue(5),
        flexDirection: 'row',
        borderColor: '#5db8fe',
        borderWidth: RFValue(1),
        marginTop: RFValue(20),
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(15)
    },
    text2: {
        color: '#39cff2',
        fontWeight: 'bold',
        fontSize: RFValue(15),
    },
    headerText : {
        fontSize: RFValue(30),
        textAlign: 'center',
        fontWeight: 'bold',
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
            marginTop: RFValue(10),
        },
        inputBox2:{
            backgroundColor : '#E5E7EB',
            borderColor:'#ffffff',
            borderRadius:RFValue(5),
            borderWidth:RFValue(2),
            width: RFValue(300),
            padding:RFValue(5),
            height: RFValue(50),
            marginTop: RFValue(20),
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
        underline: {
            textDecorationLine: 'underline',
            color: '#0d00ff',
        }
})