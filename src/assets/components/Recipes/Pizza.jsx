import axios from 'axios';
import style from './recipes.module.css';
import React, { useEffect, useState } from 'react'
import Posts from './posts/Posts';
import Isloder from '../isloder/Isloder';

export default function Pizza() {
 const [pizza,setpizza] = useState([]);
 const [isloder , setisloder] = useState(true);
  const [error , seterror] = useState('');

 const getpizza = async ()=>{
try{
  const response = await axios.get("https://forkify-api.jonas.io/api/v2/recipes?search=pizza");
  setpizza(response.data.data.recipes);
  }
  catch(err){
    seterror('error to load data');
   }
   finally{
    setisloder(false);
   }
 }

 useEffect(()=>{
     getpizza()
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
    pizza.map((pz)=>
      <Posts image_url={pz.image_url} publisher={pz.publisher} title={pz.title} id={pz.id}/>
    )
   }
   </div>
  
  </>
}
