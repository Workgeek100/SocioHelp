//importing dependencies
import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//importing screens
import AutomobilesScreen from '../screens/AutomobilesScreen';
import ForumScreen from '../screens/ForumScreen';
import IDCardScreen from '../screens/IDCardScreen';
import LoginScreen from '../screens/LoginScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PostYourTopicScreen from '../screens/PostYourTopicScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';
import UserForgotPasswordScreen from '../screens/UserForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';

const StackNavigator = createStackNavigator({
    Splash:{
        screen:SplashScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    UserForgotPassword:{
        screen:UserForgotPasswordScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },
    
    Dashboard : {
        screen: DashboardScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Forum:{
        screen : ForumScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    PostYourTopic: {
        screen: PostYourTopicScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    IDCard:{
        screen:IDCardScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Automobiles:{
        screen:AutomobilesScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Settings:{
        screen:SettingsScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Notifications:{
        screen:NotificationsScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },

    Profile:{
        screen:ProfileScreen,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false
        }
    },
});

export default createAppContainer(StackNavigator)