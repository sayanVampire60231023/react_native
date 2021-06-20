/* eslint-disable prettier/prettier */
import React, { useState ,useCallback} from 'react';
import { View,FlatList,Image ,StyleSheet,useWindowDimensions} from 'react-native';



const Imagecurosal = ({images}:{images:string[]}) => {
    
  


     const [activeindex,setActiveIndex]=useState(0);
     const windowWidth=useWindowDimensions().width;
     const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    console.log(viewableItems);
  }, []);
  return (
        <View style={styles.rt}>
           <FlatList
       data ={images}
       renderItem={({item})=>(<Image style={[styles.image, {width:windowWidth-40}]} source={{ uri:item}}/>)}
        horizontal
        snapToAlignment={'center'}
         snapToInterval={windowWidth-20}
         showsHorizontalScrollIndicator={false}
         decelerationRate={'fast'}
         viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
         
       /><View style={styles.dots}>

       {images.map((image,index)=>(
           <View 
           style={[styles.dot,{
               backgroundColor:index ===activeindex ? '#c9c9c9': '#ededed'
           }
        ]}
           />
       ))}
       </View>
            
        </View>
  );
};
const styles = StyleSheet.create({
    rt:
    {

    },
    dots:{
 flexDirection:'row',
 justifyContent:'center',

    },
    dot:{
      width:10,
      height:10,
       borderWidth:1,
       borderRadius:25,
       backgroundColor:'#ededed',
       borderColor:'#c9c9c9',
       margin:5,
       
    },
    image:{
    height:330,
    margin:10,
     resizeMode:'contain',
    },
})
export default Imagecurosal;