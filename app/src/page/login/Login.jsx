import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
const aop = yup.object().shape({
    name : yup.string().required("فیلد نام اجباری است"),
    email : yup.string().email("ایمیل نا معتبر هست").required("ایمیل اجباری است"),
    age : yup.number().positive().min(18).max(100).required(),
    password : yup.string().min(4).max(15).required('پسورد را وارد کنید'),
    confirmPassword : yup.string().oneOf([yup.ref("password")] , "password not matches").required('پسوورد مطابقت ندارد')
})



    const {register , handleSubmit , formState:{errors}} =
     useForm({resolver : yupResolver(aop)})

    const onFormSubmit = (data)=>{
        console.log("the form is submited")
        console.log(data)
    }
  return (

<>
<div className='d-flex justify-content-center m-5'>
<Link to="/"><button type="button" class="btn btn-warning btn-sm">برگشت به صفحه اصلی</button></Link>
</div>

   <div className='d-flex justify-content-center m-5'>




     <form onSubmit={handleSubmit(onFormSubmit)} className='w-25 h-25 border m-5'>
       <FloatingLabel
        controlId="floatingInput"
        label=". . . نام"
        className="mb-3">
        <Form.Control type="text" placeholder="name@example.com" {...register("name")}/>
      </FloatingLabel>
{errors.name && (<p className='text-danger'>{errors.name?.message}</p>)}

       <FloatingLabel
        controlId="floatingInput"
        label=". . .  ایمیل"
        className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" {...register("email")}/>
      </FloatingLabel>
      {errors.email && (<p className='text-danger'>{errors.email?.message}</p>)}

       <FloatingLabel
        controlId="floatingInput"
        label=". . . سن"
        className="mb-3">
        <Form.Control type="number" placeholder="name@example.com" {...register("age")}/>
      </FloatingLabel>
      {errors.age && (<p className='text-danger'>سن نامعتبر</p>)}

      <FloatingLabel className="mb-3" controlId="floatingPassword" label=". . . پسوورد">
        <Form.Control type="password" placeholder="Password" {...register("password")}/>
      </FloatingLabel>
      {errors.password && (<p className='text-danger'>پسوورد را درست وارد کنید</p>)}

      <FloatingLabel className="mb-3" controlId="floatingPassword" label=". . .  ادامه پسوورد">
        <Form.Control type="password" placeholder="Password" {...register("confirmPassword")}/>
      </FloatingLabel>
      {errors.confirmPassword && (<p className='text-danger'>{errors.confirmPassword?.message}</p>)}

      <FloatingLabel>
        <Form.Control type="submit" className='bg-success'/>
      </FloatingLabel>

    </form>

   </div>
   </>
  );
};
export default Login;