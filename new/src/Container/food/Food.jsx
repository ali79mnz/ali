import { LIST } from "./data";
import { useState } from "react";
import style from './Food.module.css'

function Food
() {

  const [state , setState] =useState('')

  const add=(e)=>{

    if (e === 'all') {
      setState('')
    }else 
    setState(e)
  }


  return (
<>
<div className={style.div}>

<div className={style.divBtn}>
<button className={style.btn} onClick={(e)=>add(e.target.id)}id="breackfast">breackfast</button>
<button className={style.btn} onClick={(e)=>add(e.target.id)}id="dinner">dinner</button>
<button className={style.btn} onClick={(e)=>add(e.target.id)}id="lunch">lunch</button>
<button className={style.btn} onClick={(e)=>add(e.target.id)}id="all"> all </button>
</div>

<div className={style.table}> 
{LIST.filter((f)=>{
  return (f.id.includes(state))
}).map((list)=>{
  return(
<div className={style.divFood}>
<img className={style.img} src={list.img} />
<div className={style.price}> 
<h3>{list.title}</h3>
<h3>{list.price}</h3>
</div>
</div>
  
  )
})}
</div>

</div>
</>
  )
}
export default Food
;
