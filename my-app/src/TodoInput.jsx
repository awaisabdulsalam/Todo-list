import React, { useState } from 'react'

const TodoInput = ({ addList }) => {

    const [inputText, setInputText] = useState('');

  return (
    <div>
        <input 
        type='text'
        value={inputText}
        placeholder='Enter Your List'
        onChange={(e)=> setInputText(e.target.value)}
        />
        <button className='add-btn' onClick={()=> {
            addList(inputText)
            setInputText('')
        }}>Add</button>
    </div>
  )
}

export default TodoInput