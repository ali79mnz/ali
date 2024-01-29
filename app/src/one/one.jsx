import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import mobile from './../assets/mobile.jpg'
// import { PRODUCTSPAGE } from "../dataOnePage/data";
import { useEffect, useState } from "react";
import axios from "axios";


function One() {

  const [inputSerch , setInputSerch] = useState('')
  const [article , setArticle] = useState([])

  useEffect(()=>{
 axios.get("http://localhost:5000/article")
 .then((rez)=>{
  setArticle(rez.data)
 })
  },[])
    return ( 
    <>
   <div className="m-2" dir="ltr">
   <Link to='/login'>
    <Button variant="warning">ثبت نام</Button>{' '}
   </Link>
   <Link to='/shop'>
    <Button variant="danger"> سبد خرید</Button>{' '}
   </Link>
    </div>
<div className="d-flex gap-4">    
<Dropdown >
      <Dropdown.Toggle  variant="success" id="dropdown-basic">
       منو
      </Dropdown.Toggle>
<input type="text" placeholder="جستجو . . ." onChange={(e)=>setInputSerch(e.target.value)} />
<span>محصول مورد نظر خود رو جستجو کنید</span>

      <Dropdown.Menu>
    <Link to="phone"><Dropdown.Item href="#/action-1">گوشی موبایل</Dropdown.Item></Link>
    <Link to="laptop"><Dropdown.Item href="#/action-1">لپتاپ</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
</div>

<div className="d-flex flex-wrap gap-4 m-4">

{article.filter((user)=>{
  return (user.productName.includes(inputSerch))
}).map((i , index)=>{
  return (

    <div key={index}>
   <Card style={{ width: '16rem' }}>
   <Image src={i.productImage} />
    <Card.Body>
      <Card.Title>{i.productName}</Card.Title>
      <Card.Text>
       {i.price}  <span className="text-danger">تومان</span>
      </Card.Text>
      <Link to={`/article/${index+1}`}><Button variant="primary">اطلاعات بیشتر</Button></Link>
    </Card.Body>
  </Card>
 </div>

  )
})}

</div>


    </>
     );
}

export default One;