import * as React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Badge, Input} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class AutomobilesScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Automobiles</Text>
            </View>
        )
    }
}