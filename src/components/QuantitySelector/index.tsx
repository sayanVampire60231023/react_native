/* eslint-disable prettier/prettier */
import React from 'react';
import { View,Text,Pressable, StyleSheet } from 'react-native';



const QuantitySelector = ({Quantitiy,setQuantity}) => {
    const onMinus=()=>
    {
         setQuantity(Math.max(0,Quantitiy-1));
    };
     const onPlus=()=>
    {
 setQuantity(Quantitiy+1);
    };

  return (
        <View style={styles.root}>
            <Pressable onPress={onMinus} style={styles.button}>
                <Text style={styles.buttontext}>-</Text>
            </Pressable>
            <Text style={styles.quantity}>{Quantitiy}</Text>
             <Pressable onPress={onPlus} style={styles.button}>
                <Text style={styles.buttontext}>+</Text>
            </Pressable>
        </View>
  )
};
const styles=StyleSheet.create({
root:{
flexDirection:'row',
alignItems:'center',
borderWidth:1,
borderColor:'#d1d1d1',
justifyContent: 'space-between',
width:100,
},
button:{
width:25,
height:35,
alignItems:'center',
justifyContent:'center',
backgroundColor:'#c2c2c2',
},
quantity:{
color:'#007eb9',
},
buttontext:{
fontSize:18,
},


    
});

    export default QuantitySelector;