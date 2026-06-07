import style from './recipes.module.css';
import Posts from './posts/Posts';
import Isloder from '../isloder/Isloder';
import useFetch from '../../hooks/useFetch';

export default function Pizza() {

  const {data,isloder,error} = useFetch ("https://forkify-api.jonas.io/api/v2/recipes?search=pizza");

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
    data.map((pz)=>
      <Posts image_url={pz.image_url} publisher={pz.publisher} title={pz.title} id={pz.id}/>
    )
   }
   </div>
  
  </>
}
