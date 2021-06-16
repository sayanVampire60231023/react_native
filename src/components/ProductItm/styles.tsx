/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
   
    oldprice:
    {
      textDecorationLine:'line-through',
    marginTop:5,
fontWeight:'normal',
   
   },
    root:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#d1d1d1',
        marginVertical:5,
        borderRadius:10,
        backgroundColor:'#fff',
       
    },
    image:
    { flex:2,
       resizeMode:'contain',
       height:150,
    },
    title:{
       fontSize:18,
    },
    price:{
      fontSize:18,
      fontWeight:'bold',
    },
    rightContainer:{
       padding:10,
       
       flex:3,
    },
    ratingContainer:
    {
      flexDirection:'row',
      alignItems:'center',
       marginVertical:5, 
    },
    star:{
       margin:2,
    },
});
export default styles;