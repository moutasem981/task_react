import style from './recipes.module.css';
import Posts from './posts/Posts';
import Isloder from '../isloder/Isloder';
import useFetch from '../../hooks/useFetch';

export default function Cake() {

  const {data,isloder,error} = useFetch ("https://forkify-api.jonas.io/api/v2/recipes?search=cake")

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
    data.map((ck)=>
      <Posts image_url={ck.image_url} publisher={ck.publisher} title={ck.title} id={ck.id}/>
    )
   }
   </div>
  
  </>
}
