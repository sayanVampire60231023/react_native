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

// import { Container } from './styles';
interface CartProductItmProps{
    Cartitem:{
       id:string;
       quantity:number;
       option?:string; 
        item:{
          id:string,
          title:string,
          image:string,
          avgRating:number,
          ratings:number,
          price:number,
          oldPrice?:number,
        };
    }
}

const CartProductItm = ({Cartitem}:CartProductItmProps) => {
     
   const {quantity: quantityProps,item}=Cartitem;
   const [quantity,setquantity]=useState(quantityProps);
   
  return (
      <View style={styles.root}>

       <View style={styles.row}>
           <View style={{flexDirection:'column'}}>

            <Image style={styles.image} source={{uri :item.image}}/>
             <View style={styles.quantity}>
                    <QuantitySelector Quantitiy={quantity} setQuantity={setquantity}/>
                </View>
           </View>
            <View style={styles. rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                
                <View style={styles. ratingsContainer}>
                 {[0,0,0,0,0].map((el,i)=>
                  <Icons style={styles.star}
                  key={`${item.id}-${i}`} 
                name={i < Math.floor(item.avgRating) ? 'star' :'star-o'} size={18} color={"#c47911"}/>
                 )
                   
               
                 } 

                

                <Text>{item.ratings}</Text>
                </View>
                <View style={{flexDirection:'row'}}>

                <Text style={styles.price}>${item.price}</Text>
                {item.oldPrice && <Text style ={styles.oldprice}>{item.oldPrice}</Text>}
                </View>
               
            </View>
           
          </View>
      </View>
  );
}

export default CartProductItm;