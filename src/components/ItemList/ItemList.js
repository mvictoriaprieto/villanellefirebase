import Card from '../Item/Item';
import '../../styles/_ItemList.scss';
import {productList} from '../../data/data.js'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import db from '../../firebase'
import { collection, getDocs} from 'firebase/firestore'



const CardList = ({children}) => {
  
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = async () => {
      const itemsCollection = collection (db, 'items')
      const itemsSnapshot =  await getDocs (itemsCollection)
     const prodList = itemsSnapshot.docs.map ((doc) => {
            let item = doc.data()
            item.id = doc.id
            return item
           
      }) 
      return prodList

    
   };

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
            return null;
        })
    }
return (
    
      
        
          <>
            {
              products.map((product) => {
                return (
                            
      
                  <Grid item lg={4}>
              
                  <div key={product.id}>
                    <Card
                      name={product.name}
                      thumbnail={product.thumbnail}
                      talle={product.talle}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                  </div>
                  </Grid>
                                                   
                  
                );
              })
            }
          </>
            
    
  );
};

export default CardList;


