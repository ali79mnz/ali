import { Route, Routes } from "react-router-dom";
import Main from "./Container/main/Main";
import './index.css';
import Quiz from "./Container/quizApp/Quiz";
import CRUD from "./Container/addBook/addbook";
import One from "./Container/formSubmit/One";
import Food from "./Container/food/Food";


function App() {


  return (
<>
<Routes>
  <Route path="/"  element={<Main/>}/>
  <Route path="/quiz"  element={<Quiz/>}/>
  <Route path="/add"  element={<CRUD/>}/>
  <Route path="/form"  element={<One/>}/>
  <Route path="/food"  element={<Food/>}/>
</Routes>
</>

  )
}
export default App;
