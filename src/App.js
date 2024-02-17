import React, { useState } from 'react';
import './App.css';

function App() {
  //...之前的狀態
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  /* 添加一個輸入字段以及一個按鈕來添加新的待辦事項。 */
const addTodo = () =>{
if(todo){
  setTodos([...todos,todo]);
  setTodo('');//清空輸入框 為下一個待辦事項做準備
}

};

  return (
    <div className="App">

      {/* 會在這裡添加待辦事項列表的UI界面代碼 */}
    <input type="text" value={todo}  onChange={(e)=> setTodo(e.target.value)}/>
<button onClick={addTodo}>添加</button>

{/*添加代辦事項 */}
<ul>
{todos.map((item, index)=>(
  <li key={index}>{item}</li> // 使用 map 方法來顯示每個待辦事項
))}

</ul>
    </div>
  );
}

export default App;
