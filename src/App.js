import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  /* 添加一個輸入字段以及一個按鈕來添加新的待辦事項。 */
  return (
    <div className="App">{/* 會在這裡添加待辦事項列表的UI界面代碼 */}
    <input type="text"
    value={todo}
    onChange={(e)=> setTodo(e.target.value)}
    />
<button onClick={()=>{}}
>

</button>
{/*添加代辦事項 */}
    </div>
  );
}

export default App;
