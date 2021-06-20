/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { View,Text, StyleSheet,FlatList} from "react-native";
import CartProductItm from "../../components/CartProductItm";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import QuantitySelector from "../../components/QuantitySelector";
import products from "../../data/cart";
const ShopingCart = ( )=>
{      const navigation =useNavigation();
    const chkout=()=>{
       navigation.navigate('Address');
    };
    const totalprice=products.reduce((summedPrice,product)=>(summedPrice+ product.item.price *product.quantity),
    0);
    return(
      <View style={styles.page}>
        
          
      
      <FlatList
       data ={products}
       renderItem={({item})=><CartProductItm Cartitem={item}/>
        
        }
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
            
                <View>

                    <Text style={{ fontSize: 18 }}>
                        Subtotal ({products.length} items):
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

export default ShopingCart;