/* eslint-disable prettier/prettier */
import React from 'react';



import { createStackNavigator } from '@react-navigation/stack';


import AddressScreen from '../screens/AddressScreen';
import ShopingCart from '../screens/ShopingCart';
// import { Container } from './styles';
const Stack=createStackNavigator();
const ShoppingcartStack = () => {
  return (
      
            
    <Stack.Navigator>
      
      <Stack.Screen component={ShopingCart} name='shopingcart'  options={{ title: 'Shoping_cart'}}/>
      <Stack.Screen component={AddressScreen} name='Address' options={{ title: 'Address' }} />
      </Stack.Navigator>

  );
}

export default ShoppingcartStack;