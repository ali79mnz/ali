import React, { useEffect, useState } from 'react'
import style from  './Main.module.css'
import { DataCart } from './CartData';
import { DataBook } from './BookData';
import { DataLitleCart } from './littleCart';
import { DataPelan } from './PelanData';
import { DataAndroid } from './androidData';
import { DataLearn } from './learbData';
import EndBar from './EndBar/EndBar';

export default function MainPage() {

    const [change , setChange] =useState(0)


setInterval(() => {
    setChange(change +1 < 9 ? change +1 : 0 );
}, 3000);


const Images = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.png",
    "./images/9.jpg",
    ]
  return (
    
    <>
    <div className={style.asdf}>

<div className={style.img}>
    <img className='w-full mt-28' src={Images[change]}  />
</div>

<div></div>
<div className={style.textImg}>

<span className='text-xl'>فروش سایت های اماده , طراحی سایت اختصاصی , موشن گرافیک , خدمات پرمیر , خدمات سئو , خدمات شبکه های اچتماعی بدون پیش پرداخت</span>
<span> به همراه قرعه کشی ماهانه</span>
<span>هرانچه در حوضه ایتی میخواهید از نهال آی تی بخواهید </span>
</div>

<div>

<span className='text-3xl flex justify-center mt-5 text-gray-700'>خدمات نهال آِی تی</span>


</div>

<div className={style.card}>
{DataCart.map((e)=>{
    return(
           <div className={style.cards} key={e.id}>
           <span className={style.pic}>{e.pic}</span>
           <h4 className={style.title}>{e.title}</h4>
           <h3 className={style.text}>{e.text}</h3>
           <h3 className={style.btn}>{e.btn}</h3>
           </div>
    )
})}
</div>
<span className='text-3xl flex justify-center mt-5 text-gray-700 '>html قالب های  </span>
<span className={style.underline}></span>

<div className={style.book}>
    {DataBook.map((f)=>{
        return(
                <div className={style.books} key={f.id}>
                    <img className={style.bookPic} src={f.pic} />
                    <span className={style.bookTitle}>{f.title}</span>
                    <span className={style.bookText}>{f.text}</span>
                    <div className={style.btnprice}>
                        <span className={style.bookBtn}>{f.btn}</span>
                        <span  className={style.bookPrice}>{f.price}</span>
                    </div>
                </div>
        )
    })}
</div>

<div className={style.underline1}></div>
<div className={style.little}>
{DataLitleCart.map((z)=>{
    return(
    <div className={style.littles}>
        <div className='text-purple-600 mt-2 mr-2 ml-2 text-4xl md:text-5xl'>{z.pic}</div>
        <div className='flex flex-col text-gray-600'>
            <span>{z.title}</span>
            <span>{z.text}</span>
        </div>
    </div>
    )
})}

</div>

<div className={style.underline1}></div>

<div className={style.pelan}>
    {DataPelan.map((p)=>{
        return(
            <div className={style.pelans}>

<div className={style.pelanTup}>
    <span className='text-2xl text-gray-700'>{p.title}</span>
    <span className='text-md text-gray-600'>{p.text}</span>
</div>

<div className={style.pelanPrice}> بین <span>{p.btn} </span > تا  <span>{p.btn2}</span></div>
<div className={style.pelanUnder}>
    <span className='text-md text-gray-600'>میلیون تومان</span>
    <button className={style.pelanBtn}>ادامه مطلب</button>
</div>

            </div>
        )
    })}
</div>



<div className='mt-10'></div>


<div className={style.book}>
    {DataAndroid.map((f)=>{
        return(
                <div className={style.books} key={f.id}>
                    <img className={style.bookPic} src={f.pic} />
                    <span className={style.bookTitle}>{f.title}</span>
                    <span className={style.bookText}>{f.text}</span>
                    <div className={style.btnprice}>
                        <span className={style.bookBtn}>{f.btn}</span>
                        <span  className={style.bookPrice}>{f.price}</span>
                    </div>
                </div>
        )
    })}
</div>




<div className={style.learn}>
{DataLearn.map((e)=>{
    return(
           <div className={style.learns} key={e.id}>
        <img className={style.Learnpic} src={e.pic} />
           <h4 className={style.Learntitle}>{e.title}</h4>
           <h3 className={style.Learntext}>{e.text}</h3>
           <h3 className={style.Learnbtn}>{e.btn}</h3>
           </div>
    )
})}
</div>


<div className={style.underline3}></div>

<EndBar/>
</div>

    </>
  )
}
