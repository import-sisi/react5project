import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vege',
        'pick up the kids from scchool'
    ]
  return (
    <ul className='main'>
        {todos.map((todo, todoInedx) => {
            return (
                <li className='todoItem' key={todoInedx}>
                    {todo}
                    <i class="fa-solid fa-pen-to-square"></i>
                </li>
            )
        })}
    </ul>
  )
}
