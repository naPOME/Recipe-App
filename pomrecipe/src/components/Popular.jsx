import React from 'react';
import Card from './Card';
import { popularMeal } from './data';
import { LoadMore } from '../pages/loadMore';



const Popular = () => {
  const visiblecards = 3
  return (
    <>


{popularMeal.slice(0,visiblecards).map((product,index)=>(
    <Card key={index} data={product}/>))}
    
    </>
    
  );
};

export default Popular;
