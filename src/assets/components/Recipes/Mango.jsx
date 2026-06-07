import style from './recipes.module.css';
import Posts from './posts/Posts';
import Isloder from '../isloder/Isloder';
import useFetch from '../../hooks/useFetch';

export default function Mango() {
  const {data,isloder,error} = useFetch("https://forkify-api.jonas.io/api/v2/recipes?search=mango");


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
    data.map((mg)=>
      <Posts image_url={mg.image_url} publisher={mg.publisher} title={mg.title} id={mg.id}/>
    )
   }
   </div>
  
  </>
}
