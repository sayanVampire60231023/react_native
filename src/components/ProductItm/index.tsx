/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Image,Text ,Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
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
  const { item } = props;
const navigation=useNavigation();
   const onPress = ()=>
   {
        navigation.navigate('ProductDetails' ,{id  : item.id});
   }
  return (
    <Pressable  onPress={onPress} style={styles.root}>
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

                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                {item.oldPrice && <Text style ={styles.oldprice}>{item.oldPrice.toFixed(2)}</Text>}
                </View>
            </View>
    </Pressable>
  );
}

export default ProductItm;