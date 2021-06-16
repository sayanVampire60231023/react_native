/* eslint-disable prettier/prettier */
import React from 'react';
import {  Pressable,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';
interface ButtonProps{
 text:string,
 onPress:()=>void;
 
}
const Button = ({text, onPress}:ButtonProps) => {
  return (
        <Pressable onPress={onPress} style ={styles.root}>
            <Text style ={styles.text}>
                {text}
            </Text>
        </Pressable>
  );
};

const styles = StyleSheet.create({
   root:
   {
      backgroundColor:'#e47911',
      marginVertical:10,
      height:35,
      justifyContent: 'center',
    alignItems:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#d97818',
    
   },
   text:{
      fontSize:16,
   },
}
);


export default Button;