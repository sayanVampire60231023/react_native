/* eslint-disable prettier/prettier */
import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';
import MenuScreen from '../screens/MenuScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ShoppingcartStack from './ShoppingcartStack';
// import { Container } from './styles';
const Tab = createBottomTabNavigator();
const ButtontabNav = () => {
    return (
       

            <Tab.Navigator  tabBarOptions={{
                showLabel:false,
                inactiveTintColor:'#ffbd7d',
                activeTintColor:'#e47911',
            }}>
                <Tab.Screen component={HomeStack} name='Home' 
                options={{
                    tabBarIcon:({ color })=>(<Entypo name="home" color={color} size={25} />),
                }}
                />
           
            <Tab.Screen component={ShoppingcartStack} name="Shoppingcart"
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="shopping-cart" color={color} size={19} />
                }}  />
            <Tab.Screen component={MenuScreen} name='more'
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="menu" color={color} size={19} />
                }} />

           
            </Tab.Navigator>

    ) 
}

export default ButtontabNav;