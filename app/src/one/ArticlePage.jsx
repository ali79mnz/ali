import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShopContext } from '../contex/Contex';
import Image from 'react-bootstrap/Image';
import Shop from '../page/shop/Shop';
import Shop2 from '../page/shop/Shop2';

export default function ArticlePage() {
  const [article , setArticle] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const params = useParams();
   const isInCart = cartItems?.some((item) => item.id === params.id);


  useEffect(()=>{

axios.get(`http://localhost:5000/article/${params.id}`)
.then((rez)=>{
  setArticle(rez.data)
})

  },[])
  return (
    <>
<div  className='d-flex justify-content-center mt-5'>
<div>
  <div className='d-flex justify-content-center mb-4 mt-5 gap-2'>
    <Link to="/">
      <Button>بازگشت</Button>
    </Link>
      <Link to="/shop">
      <Button className='bg-success'>سبد خرید </Button>
      </Link>
  </div>
   <Card style={{ width: '16rem' }}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem provident pariatur beatae, est neque   <span className='text-danger   fs-4'>{article.productName}</span> maxime voluptas! Quos, molestias beatae!</p>
    <Card.Body>
      <Card.Title>{article.productName}</Card.Title>
      <Card.Text>
       {article.price}  <span className="text-danger">تومان</span>
      </Card.Text>
    </Card.Body>
    <button className="btn btn-info btn-sm" onClick={() => addToCart(params.id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === params.id)[0]?.count}
      </span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm"
          onClick={() => removeFromCart(params.id)}>-</button> )}
  </Card>
  
 </div>
</div>


    
</>
  )
}
