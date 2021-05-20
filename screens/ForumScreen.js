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
import * as Animatable from 'react-native-animatable';

//importing screens
import IDCardScreen from './IDCardScreen';
import AutomobilesScreen from './AutomobilesScreen';
import RootDrawer from '../components/RootDrawer';

//importing icon families
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default class ForumScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Animatable.View
                style = {styles.header}
                animation = 'fadeInUp'
                >
                    <Text style = {styles.headerText}>Forum</Text>
                    <TouchableOpacity 
                    style={{marginLeft: RFValue(10), marginTop: RFValue(3)}}
                    >
                    <SimpleLineIcons name="drawer" size={40} color="#07B9FD" />
                    </TouchableOpacity>
                </Animatable.View>
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
        backgroundColor : "#05375A",
        alignItems: 'center',
        justifyContent: 'center'
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
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: RFValue(30),
    },
})