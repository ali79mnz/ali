import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";import { MdQuiz } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import style from './project.module.css'
import { Link } from 'react-router-dom';



export default function RoutToProject() {
  return (
    <>
    <div className='flex justify-center'>
<div>
<h3 className='bg-yellow-200 flex w-32 justify-center items-center rounded-xl mt-6 '><AiFillCaretDown />
نمونه پروژه<AiFillCaretDown />
</h3>
</div>
</div>

<div className={style.container}>
   <Link to="/quiz">
   <main className={style.main}>
<span className={style.icons}><MdQuiz className={style.icons1} />
</span>    quiz app
   </main>
   </Link>

    <Link to="/add">
    <main className={style.main}>
<span className={style.icons}><IoMdAdd className={style.icons2} />
</span> add book
    </main>
    </Link>

   <Link to="/form">
   <main className={style.main}>
<span className={style.icons}><FaWpforms  className={style.icons3} />
</span> form</main>
   </Link>

    <Link to="/food">
    <main className={style.main}>
<span  className={style.icons}><IoFastFoodOutline  className={style.icons4}/>

</span> food</main>
    </Link>

</div>
    </>
  )
}
