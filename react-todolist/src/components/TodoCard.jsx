import React from 'react'

export default function TodoCard() {
  return (
    <li className='todoItem' key={todoInedx}>
      <div>
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </li>
  )
}
