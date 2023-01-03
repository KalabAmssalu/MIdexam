import * as React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const [emp,setEmp]=useState([])
    const fitchEmp=()=>{
        axios.get('http://127.0.0.1:8000/emp/empList/')
        .then((r)=>setEmp(r.data))
        .catch((err)=>console.log(err))
    }
    const deleteEmp=(id)=>{
        axios.delete(`http://127.0.0.1:8000/emp/empDetails/${id}`)
        .then((res)=>alert('Deleted successully'),fitchEmp())
        .catch((err)=>alert('failed'))
    }
    useEffect(()=>{fitchEmp()},[])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {emp.map((employee)=>{
              return (
                
                <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Employee Name: {employee.Name}<br></br><button onClick={()=>deleteEmp(employee.id)}>Delete</button></Text>
              )
           })} 
        </View>
    );
}
