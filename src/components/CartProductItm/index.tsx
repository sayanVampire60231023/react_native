/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React  from 'react';
import { View,Image,Text } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import { useState } from 'react';
import {DataStore} from 'aws-amplify';
import { CartProduct} from '../../models';
// import { Container } from './styles';
interface CartProductItmProps{
    Cartitem:CartProduct;
}

const CartProductItm = ({Cartitem}:CartProductItmProps) => {
     
   
  
 const {product, ...cartProduct} = Cartitem;




   const updateQuantity = async (newQuantity: number) => {
    const original = await DataStore.query(CartProduct, cartProduct.id);
    await DataStore.save(
      CartProduct.copyOf(original, updated => {
        updated.quantity = newQuantity;
      }),
    );
  };
  return (
      <View style={styles.root}>

       <View style={styles.row}>
           <View style={{flexDirection:'column'}}>

            <Image style={styles.image} source={{uri :product.image}}/>
             <View style={styles.quantity}>
                    <QuantitySelector Quantitiy={CartProduct.Quantity} setQuantity={updateQuantity}/>
                </View>
           </View>
            <View style={styles. rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{product.title}</Text>
                
                <View style={styles. ratingsContainer}>
                 {[0,0,0,0,0].map((el,i)=>
                  <Icons style={styles.star}
                  key={`${product.id}-${i}`} 
                name={i < Math.floor(product.avgRating) ? 'star' :'star-o'} size={18} color={"#c47911"}/>
                 )
                   
               
                 } 

                

                <Text>{product.ratings}</Text>
                </View>
                <View style={{flexDirection:'row'}}>

                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                {product.oldPrice.toFixed(2) && <Text style ={styles.oldprice}>{product.oldPrice.toFixed(2)}</Text>}
                </View>
               
            </View>
           
          </View>
      </View>
  );
}

export default CartProductItm;