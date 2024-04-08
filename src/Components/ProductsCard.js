import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function ProductsCard() {
  const products = useSelector((state)=>state.products.allProducts);
  

  const { products: spreadProducts } = products[0] || {};

  console.log(spreadProducts);
  return (

    <>
        <div className='flex flex-row flex-wrap justify-center items-center mt-5 '>
            {
                products[0]?.products?.map((e)=>{
                    return (
                     <Card sx={{ maxWidth: 345 }} key={e.id} className='mx-6 my-2'> {/* Add key for unique identification */}
                      <Link to={`/products/${e.id}`}>
                     <CardActionArea>
                       <CardMedia
                         component="img"
                         height="140"
                         image={e.thumbnail}
                         alt={e.title}
                       />
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                           {e.title}
                         </Typography>
                         <Typography variant="body2" color="text.secondary">
                           {e.price}
                         </Typography>
                       </CardContent>
                     </CardActionArea>
                     </Link>
                   </Card>
                   

                    )
                 })
            }
        </div>
            

    </>
  );
}

export default ProductsCard;
