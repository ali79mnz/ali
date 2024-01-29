
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contex/Contex";
import {PRODUCTSPHONE } from "../../data/data";
import DataPhone from "../phone/DataPhone";
import DataLaptop from "../laptop/DataLaptop";
import { PRODUCTSLAPTOP } from "../../dataa/data";
import ArticlePage from "../../one/ArticlePage";
import Shop2 from "./Shop2";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



function Shop() {
    const {cartItems } = useContext(ShopContext)
    
    const [article , setArticle] = useState([])

    useEffect(()=>{
   axios.get("http://localhost:5000/article")
   .then((rez)=>{
    setArticle(rez.data)
   })
    },[])

    const add =()=>{
        axios.post('http://localhost:8000/data',{cartItems})
        
    }

    return ( 
        <>
        <div className="d-flex">
        <Link to="/">
        <Button >  صفحه اصلی</Button>
        </Link>


<div> <Button className="bg-success" onClick={add}> ثبت خرید</Button></div>

        <div>
        {PRODUCTSPHONE.map((p)=>{
                if( cartItems?.some((i)=> i.id===p.id && i.count >0))
                 return <DataPhone data={p} ></DataPhone>
            })}
        </div>
        <div>
        {PRODUCTSLAPTOP.map((p)=>{
                if( cartItems?.some((i)=> i.id===p.id && i.count >0))
                 return <DataLaptop laptop={p} ></DataLaptop>
            })}
        </div>
        <div className="d-flex gap-4">
        {article.map((p)=>{
                if( cartItems?.some((i)=> i.id===p.id && i.count >0))
                 return <Shop2 data={p} ></Shop2>
            })}
        </div>

        
        </div>
        </>
     );
}

export default Shop;