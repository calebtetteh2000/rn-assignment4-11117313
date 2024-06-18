import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ image, backgroundColor, label, miniLabel, location, price, textColour, background}) => {
  return (
    <>
    <View style={[styles.container2, {backgroundColor: backgroundColor}]}>
        <Image 
        source={image}  
        style={styles.logo} />
        <Image source={background} style={styles.background}></Image>
        <Text style={[styles.label, {color: textColour}] }>{label}</Text>        
        <Text style={[styles.miniLabel, {color: textColour}]}>{miniLabel}</Text>
        <Text style={[styles.location, {color: textColour}]}>{location}</Text>
        <Text style={[styles.price, {color: textColour}]}>{price}</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container2: {
      width: 280,  
      height: 186, 
      marginVertical: 1,      
      borderRadius: 24, 
      margin: 15,   
      left: -14, 
      marginTop:10,    
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: 0.06,
    },
  
    label: {
      position: 'absolute',
      top: 18,
      left: 60,
      marginLeft: 10,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',      
    },

    price: {
      position: 'absolute',
      left: 20,
      bottom: 30,      
    },

    location: {
      position: 'absolute',
      right: 30,
      bottom: 30,      
    },

    miniLabel: {
      position: 'relative',
      left: 64,
      top: 4,
      fontWeight: 'ultralight',
      marginLeft: 10,
    },

    logo: {
      position: 'relative',
      top: 22,
      left: 20,
      width: 35,
      height: 35,
      padding: 15,
      paddingBottom: 20,
      borderRadius: 15,
      backgroundColor: 'white',
      resizeMode: 'cover',
    }

    
});

export default FeaturedJobCard;