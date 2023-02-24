import React from 'react'

const List = ( { item, deleteItem, index } ) => {
  return (
    <li className='list'>
      {item}
      <span>
      <i className="fa-solid fa-trash remove-btn" onClick={()=> deleteItem(index)}></i>
      </span>
    </li>
  )
}

export default List