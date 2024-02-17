import React, { useState } from 'react'
import { DataProducts } from './ProductData'
import style from './products.module.css'
import './buttons.css'
import EndBar from '../mainPage/EndBar/EndBar'

export default function Products() {

const [state ,setState] =useState(1)

    const handleClick=(e)=>{
 setState(e)
}
 

  return (
    <>
    
    <div className={style.nav }>
<div>

<div className={style.navTop}>
<span>مرتب سازی</span>
<span>جدیدترین</span>
<span>محبوب ترین</span>
<span>ارزان ترین</span>
<span>گران ترین</span>
<span> پربازدید ترین</span>

</div>
<div className={style.book}>
{DataProducts.map((f)=>{
        return(
                <div className={style.books} key={f.id}>
                    <img className={style.bookPic} src={f.pic} />
                    <span className={style.bookTitle}>{f.title}</span>
                    <span className={style.bookTitle2}>{f.title2}</span>
                    <span className={style.bookText}>{f.text}</span>
                    <div className={style.btnprice}>
                        <span className={style.bookBtn}>{f.btn}</span>
                        <span  className={style.bookPrice}>{f.price}</span>
                    </div>
                </div>
        )
    })}
</div>


<div className={style.buttons}> 

<button onClick={()=>handleClick(1)} id='1' className={state === 1 ? 'active' : ''}>1</button>
<button onClick={()=>handleClick(2)} id='2' className={state === 2 ? 'active' : ''}>2</button>
<button onClick={()=>handleClick(3)} id='3' className={state === 3 ? 'active' : ''}>3</button>
<span>...</span>

</div>
</div>

<EndBar/>
    </div>
    
    </>
  )
}
