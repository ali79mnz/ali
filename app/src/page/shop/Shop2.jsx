import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { ShopContext } from '../../contex/Contex';

export default function Shop2(props) {
    const {id , productImage , productName ,price}= props.data
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  
  return (

    <>
       <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={productImage} />
    <Card.Body>
      <Card.Title>{productName}</Card.Title>
      <Card.Text>
       {price}  <span className="text-danger">تومان</span>
      </Card.Text>
    </Card.Body>
    <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>

        <button
          className="btn btn-info btn-sm"
          onClick={() => removeFromCart(id)}>-</button> 
  </Card>
    </>
  )
}













