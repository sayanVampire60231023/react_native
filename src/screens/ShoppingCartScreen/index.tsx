/* eslint-disable prettier/prettier */


import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import CartProductItm from "../../components/CartProductItm";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import QuantitySelector from "../../components/QuantitySelector";
//import products from "../../data/cart";
import {DataStore, Auth} from 'aws-amplify';

import {Product, CartProduct} from '../../models';
const ShoppingCartScreen = ( )=>
{      const navigation =useNavigation();
    const chkout=()=>{
       navigation.navigate('Address');
    };
 const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(CartProduct, cp =>
    cp.quantity('gt',0)
      //cp.userSub('eq', userData.attributes.sub),
    ).then(setCartProducts,);
  };
  useEffect(() => {
    fetchCartProducts();
  }, []);

useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      
      return;
    }

    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      // assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
          ...cartProduct,
          product: products.find(p => p.id === cartProduct.productID),
        })),
      );
    };

    fetchProducts();
  }, [cartProducts]);
    


   





    const totalprice=cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0,
  );


    if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }

    return(
      <View style={styles.page}>
      <FlatList
       data ={cartProducts}
       renderItem={({item})=><CartProductItm Cartitem={item}/>
        
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            
                <View>

                    <Text style={{ fontSize: 18 }}>
                        Subtotal ({cartProducts.length} items):
                        <Text style={{ color: '#111', fontSize: 18 }}> ${totalprice.toFixed(2)}</Text>
                    </Text>
                <Button text="Proceed to checkuot " onPress={chkout } />
                </View>

        }
       />
     
     
      </View>
    );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
    page:{
       padding:10,
       
    },
}
);



export default ShoppingCartScreen;