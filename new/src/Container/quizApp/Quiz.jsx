import React, { useState } from 'react';
import { questions } from './data';
import style from './quiz.module.css'
import { Link } from 'react-router-dom';

export default function Quiz() {

const [state , setState]=useState(0)
const [index , setIndex]=useState(0)
const [showQu , setShowQu]=useState(false)


const handle=(Correct)=>{

if (Correct ===true) {
  setIndex(index +1)
}


const next = state +1
if (next <questions.length) {
  setState(next)
}else
setShowQu(true)


}


	return(
    <>
<div className='flex justify-center mt-5'>  <Link to="/"><button className='bg-yellow-400 w-20 h-8 rounded-md '>بازگشت</button></Link>
</div>
<main className={style.allMain}>
<div className={style.allQuiz}>

{showQu ? <div className={style.end}>
      <h3>شما ( {index} ) سوال را از ( {questions.length} ) سوال پاسخ دادی</h3>
    </div>
:(
  <div className={style.answer}>
    <h3 className={style.numberQuestion}> سوال {state +1} / {questions.length}</h3>
    <h2 className={style.answer1}>{questions[state].question}</h2>
    {questions[state].answer.map((item)=>{
      return <button className={style.btn} onClick={()=>handle(item.Correct)}>{item.Text}</button> 
    })}
  </div>
)    
  }
</div>
</main>
    </>
  )
}
