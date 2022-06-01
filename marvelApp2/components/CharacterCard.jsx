import {StyleSheet, TouchableOpacity, Text,Image ,View} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({image,name}) => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Detail')}>
 <Image style={styles.image} source={{uri: image
 }}/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"stretch",
        flex:1,
        borderWidth:4,
    },
    image:{width:80,height:80},
    font:{color:"black",
    fontSize:16,
    padding:5,
margin:20}
})


export default CharacterCard