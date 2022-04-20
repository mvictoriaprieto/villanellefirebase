import React,{useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetailCard = ({ name, thumbnail, price, id, talle, stock, desc }) => {
  const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
  const onAdd = (e, count) => {
    if(!!e & contador<1){
      setContador(count);
  }
}
useEffect(()=>{
  if(contador>0){
      setMostrarItemCount(false);
      console.log("el valor de contador es:", contador);
  }
},[contador])


  return (
    <>
     <Grid item lg={8}>
      <div className ="imageDetailContainer">
      <img src= {thumbnail} alt="Chotes" />
      </div>
      </Grid>
           
      <Grid item lg={3}>
  
          <h3>{name}</h3>
          <p className = "detailDesc">{desc}</p>
          <div className="Talle">Size: {talle} </div>
          
          <p className="precio">${price}</p>
          
          <div className='btnComprarDetail'>

         {mostrarItemCount ?(
                        <ItemCount stock={stock} initial={1} action={onAdd}/>
                        ):( <Link to="/cart">
                                <Button>Finalizar Compra</Button>
                            </Link>
                        )
         }
          </div>
          </Grid>
     
    </>
  );
};

export default ItemDetailCard;
