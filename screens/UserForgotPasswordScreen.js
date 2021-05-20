//importing dependencies
import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert, ImageBackground} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Icon, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';

//importing icons
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class UserForgotPassword extends React.Component {
constructor(){
    super()
    this.state = {
        emailId : ''
    }
}

    userForgotPassword=(emailId)=>{
        if(emailId===''){
            Alert.alert("Please provide an email address.")
        }
        else{
        this.props.navigation.navigate("Login")
        Alert.alert("The email with the link to reset your password has been sent. Please check your inbox or spam folder.")
        return firebase.auth().sendPasswordResetEmail(emailId)
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.backIcon} onPress = {()=>{this.props.navigation.navigate('Login')}}>
                <Ionicons name="chevron-back" size={50} color="#fff" />
                </TouchableOpacity>
                <Animatable.View
                style = {styles.header}
                animation = 'fadeInUp'
                >
                 <Text style = {styles.headerText}>Reset Password</Text>
                </Animatable.View>
                <Animatable.View 
                style = {styles.footer}
                animation = 'fadeInUpBig'>
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
                        emailId:text
                    })
                }} />
                 <LinearGradient 
                    colors={['#5db8fe', '#39cff2']}
                    style = {styles.button}
                    >
                <TouchableOpacity
                onPress = {()=>{
                    this.userForgotPassword(this.state.emailId)
                }}>
                    <Text style ={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </LinearGradient>
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
    button : {
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
        height: RFValue(60),
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
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
    },
    header : {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(50),
        marginTop: RFValue(-183),
    },
    footer :{
        flex:3,
        backgroundColor: 'white',
        borderTopLeftRadius: RFValue(30),
        borderTopRightRadius: RFValue(30),
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(30),
    },
    headerAnimation : {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: RFValue(20),
        paddingBottom: RFValue(50),
    },
    emailIcon : {
        marginLeft : RFValue(0),
        marginRight : RFValue(5)
    },
    passwordIcon : {
        marginLeft: RFValue(3),
        marginRight : RFValue(5),
    },
    headerText : {
        fontSize: RFValue(30),
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
    },
    backIcon: {
        marginTop: RFValue(60),
        zIndex: RFValue(1),
    }
})