//importing dependencies
import * as React from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView} from 'react-native';

//importing screens
import RootDrawer from '../components/RootDrawer';
import { NavigationContainer } from '@react-navigation/native';

export default class DashboardScreen extends React.Component {
    render(){
        return(
                <RootDrawer />
        )
    }
}