/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import ButtontabNav from './ButtonTabNavigator';
// import { Container } from './styles';
const Root=createStackNavigator();
const Router = () => {
  return (
       <NavigationContainer>
            
    <Root.Navigator    screenOptions={{headerShown:false}}>
              <Root.Screen component={ButtontabNav} name='HomeTavs' />
    </Root.Navigator>
           
       </NavigationContainer>
  );
}

export default Router;