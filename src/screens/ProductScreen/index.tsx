/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { View,Text,ScrollView } from 'react-native';
 import product from '../../data/product';
import { Picker } from '@react-native-picker/picker';
import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import Imagecurosal from '../../components/Imagecurosal';

const ProductScreen = () => {
const [selectedOption, setSelectedOption] = useState(product.options? product.options[0]:null);
const [Quantitiy, setQuantity] = useState(1);

  return (
    <ScrollView style={{paddingBottom:10, paddingTop:5,paddingLeft:5,paddingRight:5,  backgroundColor:'white'}}>
        <Text style={styles.title}>{product.title}</Text>
          <Imagecurosal images={product.images}/>

        <Picker

            selectedValue={selectedOption}
            onValueChange={(itemValue)=>setSelectedOption(itemValue)}>
           {product.options.map(option=>(<Picker.Item label={option} value={option}/>))} 
        
       
        </Picker>

        <Text style={styles.price}>
           from ${product.price}
         ${product.oldPrice && (<Text style={styles.oldprice}>${product.oldPrice}</Text>) }
        </Text>

         <Text style={styles.description}>{product.description}</Text>
         <QuantitySelector Quantitiy={Quantitiy}
          setQuantity={setQuantity}/>

         <Button text={'Add to Cart'}
          onPress={()=>{console.warn('adding')}} />
         <Button text={'Buy Now'}
          onPress={()=>{}} />

    </ScrollView>
  );
};

export default ProductScreen;