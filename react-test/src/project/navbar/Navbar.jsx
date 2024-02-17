import React, { useState } from 'react'
import style from './Navbar.module.css'
import { CiSearch } from "react-icons/ci";
import { BsArrowLeftSquare } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BiCartAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";





export default function Navbar() {

const [nav , setNav]=useState(false)

  return (
    <>
<span onClick={()=>{setNav((pre)=>!pre)}} className={style.menuL}><CiMenuBurger /></span>
{nav && 
 <div className={style.divp}>
<span onClick={()=>{setNav((pre)=>!pre)}} className={style.menuL}><CiMenuBurger /></span>

 <section>
    
 <div className={style.nav1p}>
     <div className={style.inputNavp}>
         <span> نهال آی تی | اولین وبسایت خدمات فروشگاهی در حوزه آی تی در ایران</span>
     </div>
 </div>
 </section>
 
 <section>
 <div dir='rtl' className={style.nav2p}>
 
 <div className={style.plan1p}>
 
 <div className={style.nahalp}>نهال <span className={style.ipt}>آی تی</span></div>
 
 <div className={style.inputSearchp}> <span className={style.inputIconp}><CiSearch /></span><div><input className={style.input} type="text" placeholder='جستجو' /></div></div>
 </div>
 
     <div className={style.plan2p}>
 
     <div className={style.joinp}><span>ورود </span></div>
 
 <div className={style.buyp}><span className={style.khp}>|</span> <span><CiHeart /> </span><span><BiCartAlt /> </span></div>
     </div>
 </div>  
 </section>
 
 <div dir='rtl' className={style.Buttonp}>
 
 <button>صفحه اصلی</button>
 <Link to='/products'>
 <button className={style.mahsolp}><span>محصولات</span><span className='mt-2 mr-2'><BsChevronDown /></span></button>
 
 </Link>
 <button>ثبت سفارش </button>
 <button>بلاگ</button>
 <button>نمونه کارها</button>
 <button>اموزش ها</button>
 <button>تماس با ما </button>
 <Link to="/">
 <button className={style.backp}>بازگشت</button>
 
 </Link>
 </div>
 
 <section>
 <div>
 
 </div>
 
 </section>
 
     </div>
 
}
    <div className={style.div}>

<section>
   
<div className={style.nav1}>
    <div className={style.inputNav}>
        <span> نهال آی تی | اولین وبسایت خدمات فروشگاهی در حوزه آی تی در ایران</span>
    </div>
</div>
</section>

<section>
<div dir='rtl' className={style.nav2}>

<div className={style.plan1}>

<div className={style.nahal}>نهال <span className={style.it}>آی تی</span></div>

<div className={style.inputSearch}> <span className={style.inputIcon}><CiSearch /></span><div><input className={style.input} type="text" placeholder='جستجو' /></div></div>
</div>

    <div className={style.plan2}>

    <div className={style.join}><span className={style.joinIcon}><BsArrowLeftSquare /></span> <span>ورود | عضویت </span></div>

<div className={style.buy}><span className={style.kh}>|</span> <span><CiHeart /> </span><span><BiCartAlt /> </span></div>
    </div>
</div>  
</section>

<div dir='rtl' className={style.Button}>

<button>صفحه اصلی</button>
<Link to='/products'>
<button className={style.mahsol}><span>محصولات</span><span className='mt-2 mr-2'><BsChevronDown /></span></button>

</Link>
<button>ثبت سفارش </button>
<button>بلاگ</button>
<button>نمونه کارها</button>
<button>اموزش ها</button>
<button>تماس با ما </button>
<Link to="/">
<button className={style.back}>بازگشت</button>

</Link>
</div>

<section>
<div>

</div>

</section>

    </div>


    </>
  )
}
