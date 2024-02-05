import React, { useState} from "react";
import axios from 'axios'
import style from './book.module.css'
import { Link } from "react-router-dom";


const CRUD = () => {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        title: "",
        
    });
    const [search, setSerch] = useState('');


    const [data, setData] = useState([]);

    const { name, id, title } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // const Change = (e) => {
    //     setSerch(e.target.value)
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && id && title) {
            axios.post('http://localhost:7000/data', formData)
                .then(res => {
                    setData([...data, res.data]);
                    setFormData({ name: "", id: "", title: "" });

                })
                .catch(err => console.log(err))

        }
    };



    const handleDelete = (deleteID) => {
      setData(data.filter((code)=>(code.id !== deleteID)))
        axios.delete(`http://localhost:7000/data/${deleteID}`)
        .then(res => res.data)
        .catch(err => console.log(err))

    };



    
    
    return (
        <>
        <div className={style.container}>

<div className={style.a}>

<div className={style.b}>

<h4 className={style.h4}>  اضافه کردن کتاب </h4>

<form onSubmit={handleSubmit}>

<div className={style.formDiv}>
<div><input type="text" className={style.form}
id="name"
placeholder="اسم کتاب را وارد کنید"
name="name"
value={name}
onChange={handleChange}/>
</div>

<div>

<input   type="text"   className={style.form}   id="id"  placeholder="ایدی کتاب "  name="id"  value={id}   onChange={handleChange}/>
</div>

<div>

<input  type="text" className={style.form}  id="title"  placeholder="موضوع" name="title" value={title}  onChange={handleChange}/>
</div>

</div>


 <button type="submit" className={style.add}>اضافه کردن</button>
</form>
 <input className={style.saerch} type="text" placeholder="جستجو" onChange={(e)=>setSerch(e.target.value)}/> 




<table className={style.table}>

<thead>
<tr>
<th>اسم</th>    <th>ایدی</th>      <th>موضوع</th>

</tr>
</thead>
                        
<tbody className={style.td}>{data.filter((e)=>{
    return (e.name.includes(search))
}).map((item, index) => (
<tr key={index}>
<td>{item.name}</td>
<td>{item.id}</td>
<td>{item.title}</td>
<td><button className={style.ddelete} onClick={() => handleDelete(item.id)}>حذف</button></td>
</tr>))}</tbody>


</table>



</div>

 </div>

</div >
<div className='flex justify-center mt-5'>  <Link to="/"><button className='bg-yellow-400 w-20 h-8 rounded-md '>بازگشت</button></Link>
</div>
</>
    );

}
export default CRUD;