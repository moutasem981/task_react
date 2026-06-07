import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

     const [data,setdata] = useState([]);
 const [isloder , setisloder] = useState(true);
  const [error , seterror] = useState('');

 const getdata = async ()=>{
try{
  const response = await axios.get(url);
  setdata(response.data.data.recipes);
  }
  catch(err){
    seterror('error to load data');
   }
   finally{
    setisloder(false);
   }
 }

 useEffect(()=>{
     getdata()
 }, [])
  return {data , isloder , error}
}
