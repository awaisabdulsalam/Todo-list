import React, { useState } from 'react'
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {
  const [list, setList] = useState([]);

const addList = (newInput) => {
  setList([...list, newInput]);
}
const deleteItem = (key) => {
  let newItem = [...list];
  newItem.splice(key, 1);
  setList([...newItem]);
}

  return (
    <main>
      <section className='card'>
      <h1>Todo List</h1>
      <TodoInput addList={addList} />
      <hr />
      {list.map((listItem, index) => {
        return (
          <TodoList item={listItem} key={index} index={index} deleteItem={deleteItem} />
        )
      })}
      </section>
    </main>
  );
}

export default App;
