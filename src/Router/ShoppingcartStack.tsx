/* eslint-disable prettier/prettier */
import React from 'react';



import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

import AddressScreen from '../screens/AddressScreen';

// import { Container } from './styles';
const Stack=createStackNavigator();
const ShoppingcartStack = () => {
  return (
      
            
    <Stack.Navigator>
      
     {/* <Stack.Screen component={ShopingCart} name='Shoppingcart'  options={{ title: 'Shoping_cart'}}/>*/}
      <Stack.Screen component={ShoppingCartScreen} name='Shoppingcart' options={{ title: 'Shoping_cart' }} />
      <Stack.Screen component={AddressScreen} name='Address' options={{ title: 'Address' }} />
      </Stack.Navigator>

  );
}

export default ShoppingcartStack;