import {ActivityIndicator,FlatList,StyleSheet, View, Text } from 'react-native'
import {useState,useEffect} from 'react'
import apiParams from '../config.js'
import CharacterCard from './CharacterCard'
import axios from 'axios'

const Home = () => {
    const[isLoading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    const {ts,apikey,hash,baseURL}=apiParams
    useEffect(()=>{
        axios.get(`${baseURL}/v1/public/characters`,{
            params:{
                ts,apikey,hash
            }
        })
    .then(response=>setData(response.data.data.results))
    .catch(error=>console.error(error))
    .finally(()=>setLoading(false));
},[]);
  return (
    <View style={styles.container}>
    {isLoading ? <ActivityIndicator size="large" color="#00ff00"/> : (
        <FlatList data={data} keyExtractor={({id})=>id.toString()}
        renderItem={({item})=> (<CharacterCard image={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`} name={item.name} />)}
   /> )}  
    </View>
  )
}
const styles=StyleSheet.create({
    container:{display:"flex",flex:1,alignItems:'stretch',justifyContent:'flex-start',margin:20,borderWidth:4,backgroundColor:"rgba(190,35, 40, 1)"}
})

export default Home