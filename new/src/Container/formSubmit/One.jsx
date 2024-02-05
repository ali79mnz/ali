import { useForm } from "react-hook-form";
import style from './form.module.css'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logo from './backGround.jpg'
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

function One() {
  const form = useRef();
  const[state , setState] =useState(false)

const yun = yup.object().shape({
  name : yup.string().min(5).max(15).required(),
  number : yup.string().min(11).max(11).required(),
  email : yup.string().email().min(11).required()
})

const {register , handleSubmit , formState:{errors}}=useForm({resolver :yupResolver(yun)})

  const sum =(e)=>{
    setState(true)

    emailjs.sendForm('service_tm6b4gj', 'template_bcz365n', form.current, 'KTr5uPX8y1O1j9-1r').then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }


  return (
<>

<div>
<img src={logo}  className={style.logo}/>
{ state ?<div className={style.two}>ورود با موفقیت انجام شد <FiCheck />
<Link to="/"><button className={style.back1}>بازگشت</button></Link>
</div> : 

<div className={style.form1}>
<form onSubmit={handleSubmit(sum)} ref={form} className={style.form}>
  <input type="text" className={style.inputs} placeholder="نام" {...register('name')}/>
  <input type="number" className={style.inputs} placeholder="شماره تلفن" {...register('number')}/>
  <input type="text" className={style.inputs} placeholder="ایمبل" {...register('email')}/>
  <input type="submit" className={style.submit} />
  {errors.name && <p className={style.error}> <span className={style.spanEror}>خطا</span>  حداقل پنج کارکتر  </p> }
  {errors.number && <p className={style.error}> <span className={style.spanEror}>خطا</span>شماره تلفن اشتباه است  </p>}
  {errors.email && <p className={style.error}>  <span className={style.spanEror}>خطا</span>ایمیل اشتباه تست </p>}
</form>
<Link to="/"><button className={style.back}>بازگشت</button></Link>
</div>
}
</div>

</>

  )
}
export default One;
