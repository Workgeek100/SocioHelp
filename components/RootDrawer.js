//importing dependencies
import * as React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerGestureContext} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//importing screens
import AutomobilesScreen from '../screens/AutomobilesScreen';
import ForumScreen from '../screens/ForumScreen';
import IDCardScreen from '../screens/IDCardScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import PostYourTopicScreen from '../screens/PostYourTopicScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

export default class DrawerNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name = 'Forum' component={ForumScreen} />
                <Drawer.Screen name = 'ID Card' component={IDCardScreen} />
                <Drawer.Screen name = "Automobiles" component = {AutomobilesScreen} />
            </Drawer.Navigator>
            <Tab.Navigator>
      <Tab.Screen name="Home" component={ForumScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
            </NavigationContainer>
        )
    }
}