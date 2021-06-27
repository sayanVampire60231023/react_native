/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React  from "react";
import { View, StyleSheet,FlatList} from "react-native";
import ProductItm from "../../components/ProductItm";
// import products from "../../data/products";
import { useState,useEffect } from "react";
 import { DataStore } from "@aws-amplify/datastore";
 import {Product} from '../../models';
const HomeScreen = ({searchValue}:{searchValue :String} )=>
{ const [products,setProducts]=useState<Product[]>([]);
  useEffect(()=>{
    const fetchProduct = async()=>{
      const result = await DataStore.query(Product);
      setProducts(result);
    };
    fetchProduct();
  },[]);
    return (
      <View style={styles.page}>


      <FlatList
       data ={products}
       renderItem={({item})=><ProductItm item={item}/>}

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

export default HomeScreen;