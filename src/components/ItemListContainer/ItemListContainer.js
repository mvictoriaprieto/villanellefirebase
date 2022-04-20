import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import '../../styles/_ItemListContainer.scss';



import CardList from '../ItemList/ItemList';
const ItemList = (props) => {
  return (
    <>
      <Container fixed className="Last Chance">
        <h2>{props.message}</h2>
      </Container>
      
      
      
      
      <Container maxWidth="xl">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        >
        <CardList/>
       
        
      </Grid>
    </Container>
  


        
      
    
    
    
      
          </>

          
  );
};

export default ItemList;

