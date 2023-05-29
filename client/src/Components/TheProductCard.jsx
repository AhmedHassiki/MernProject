import React from 'react'
// import  windowsminipng from './windowsminipng.png'
import { Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getOneProduct } from '../JS Redux/actions/productAction'
import { Link } from 'react-router-dom'
import { toggleTrue } from '../JS Redux/actions/edit'

const TheProductCard = ({product}) => {
  

  const dispatch = useDispatch();
  const delProduct = (id) => dispatch(deleteProduct(id));
  const getProduct = (id) => dispatch(getOneProduct(id));
  const editTrue = () => dispatch(toggleTrue());

  const isAuth = useSelector(state=>state.authReducer.isAuth);
  
  return (
    <div>
        <Card style={{ width: '18rem', margin:'10px', height:'38rem' }}>
      <Card.Img style={{ width: '17rem', height:'24rem', marginTop:'10px' }} variant="top" src={product.selectedFile}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price : {product.price}$</Card.Text>
        <Card.Text>Category : {product.category}</Card.Text>
        <Button variant="primary">Buy</Button>
        {
          isAuth ? 
          <>
          <Link to={`/edit/${product._id}`}><Button variant="primary" onClick={()=>{getProduct(product._id); editTrue()}}>Edit</Button></Link>
          <Button variant="primary" onClick={()=>delProduct(product._id)}>Delete</Button>
          </>
          : 
          <></>
        }
      </Card.Body>
    </Card>
    </div>
  )
}

export default TheProductCard