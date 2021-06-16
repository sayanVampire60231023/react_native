/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Image,Text } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// import { Container } from './styles';
interface ProductItmProps{
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

const ProductItm = (props:ProductItmProps) => {
   const {item}=props;
   
  return (
       <View style={styles.root}>
            <Image style={styles.image} source={{uri :item.image}}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                
                <View style={styles.ratingContainer}>
                 {[0,0,0,0,0].map((el,i)=>
                  <Icons style={styles.star}
                  key={`${item.id}-${i}`} 
                name={i <Math.floor(item.avgRating) ? 'star' :'star-o'} size={18} color={"#c47911"}/>
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
  );
}

export default ProductItm;