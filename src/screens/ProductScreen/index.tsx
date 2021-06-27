// eslint-disable-next-line eslint-comments/no-unused-disable
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {Text,ScrollView, ActivityIndicator } from 'react-native';

 import { useRoute ,useNavigation} from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import styles from './style';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import Imagecurosal from '../../components/Imagecurosal';
 import { DataStore ,Auth } from 'aws-amplify';
 import {Product} from '../../models'; 
import { CartProduct } from '../../models';
const ProductScreen = () => {
  const [product, setProduct] = useState< Product | undefined>(undefined);

  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);

//console.log(route.params);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);
  useEffect(() => {
    if (product?.option) {
      setSelectedOption(product.option[0]);
    }
  }, [product]);

  if (!product) {
    return <ActivityIndicator />;
  }

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
    });

    await DataStore.save(newCartProduct);
    navigation.navigate('Shoppingcart');
    
  };




  return (
    <ScrollView style={{paddingBottom:10, paddingTop:5 , paddingLeft:5 ,paddingRight:5,  backgroundColor:'white'}}>
        <Text style={styles.title}>{product.title}</Text>
          <Imagecurosal images={product.images}/>

        <Picker

            selectedValue={selectedOption}
            onValueChange={(itemValue)=>setSelectedOption(itemValue)}>
           {product.option?.map(options=>(<Picker.Item label={options} value={options}/>))} 
        
       
        </Picker>

        <Text style={styles.price}>
           from ${product.price.toFixed(2)}
         {product.oldPrice && (<Text style={styles.oldprice}>${product.oldPrice.toFixed(2)}</Text>) }
        </Text>

         <Text style={styles.description}>{product.description}</Text>
         <QuantitySelector Quantitiy={quantity}
          setQuantity={setQuantity}/>

         <Button text={'Add to Cart'}
          onPress={onAddToCart} />
         <Button text={'Buy Now'}
          onPress={()=>{}} />

    </ScrollView>
  );
};

export default ProductScreen;