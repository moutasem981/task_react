import axios from 'axios';
import style from './recipes.module.css';
import React, { useEffect, useState } from 'react'
import Posts from './posts/Posts';
import Isloder from '../isloder/Isloder';

export default function Cake() {
 const [cake,setcake] = useState([]);
 const [isloder , setisloder] = useState(true);
  const [error , seterror] = useState('');

 const getcake = async ()=>{
try{
  const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=cake");
  setcake(response.data.data.recipes);
  }
  catch(err){
    seterror('error to load data');
   }
   finally{
    setisloder(false);
   }
 }

 useEffect(()=>{
     getcake()
 }, [])

 if(isloder){
    return <Isloder />
  }
  if(error){
    return <h1>{error}</h1>
  }
  return <>
  <h1>Recipes</h1>
  <div className={style.cards}>
   {
    cake.map((ck)=>
      <Posts image_url={ck.image_url} publisher={ck.publisher} title={ck.title} id={ck.id}/>
    )
   }
   </div>
  
  </>
}
