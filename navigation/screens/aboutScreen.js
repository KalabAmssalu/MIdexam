import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect} from 'react';
import axios from 'axios'
export default function aboutScreen({ navigation }) {
    const [ufname,setufname]=useState('')
    const [ulname,setulname]=useState('')
    const [uDepartment,setuDepartment]=useState('')

    const [posts,setPosts]=useState([])
    const fetchData=()=>{
      axios.get('http://127.0.0.1:8000/teach/ListTeach/')
      .then((Response)=> setPosts(Response.data))
      .catch((err)=>console.log(err))
    }
    const deleteData=(id)=>{
        axios.delete(`http://127.0.0.1:8000/teach/deletTeach/${id}`)
        .then((Response)=> alert('successfully deleted'),fetchData())
        .catch((err)=>console.log(err))
      }
      const setData=(Id)=>{
        axios.post('http://127.0.0.1:8000/teach/ListTeach/',{name:ufname}) 
        .then((res)=> {alert('New Teacher is added Successfully');fetchData();})
        
        .catch((err)=>alert('Failed'))
      }
      const updateData=(Id)=>{
        axios.patch(`http://127.0.0.1:8000/teach/details/${Id}`,{name:ulname}) 
        .then((res)=> {alert('Updated Successfully');fetchData();})
        
        .catch((err)=>alert('Failed'))
      }
    useEffect(()=>{fetchData()},[])
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           { posts.map((post)=>{
      return (
        <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                    First Name: {post.name} <br></br>
                    
                <button onClick={()=>deleteData(post.id)}>Delete</button><br></br>
                Name<input   onChange={(e)=>setulname(e.target.value)} type='text'/>
                          <button onClick={()=>updateData(post.id)}>Update</button>
        </Text>
      ) 
    })} 
                  Name<input  onChange={(e)=>setufname(e.target.value)} type='text'/>
                          <button onClick={()=>setData()}>Add new</button>

                          


        </View>
    );
}