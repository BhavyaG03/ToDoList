import React, { useState } from 'react'

const List = () => {
    const[todos,setTodos]=useState([])
    const[value,setValue]=useState('')
    const[editMode,setEditMode]=useState(false)
    const[editId,setEditId]=useState(null)
    const[editValue,setEditValue]=useState('')
    const handleAddButton=()=>{
     if (value.trim()!=='') {
      const newTodo={
        id:new Date().getTime(),

        text:value

      }
      setTodos([...todos,newTodo])

     }
     setValue('')

    }
    const handleDelete=(id)=>{
      const update=todos.filter((todo)=>
        todo.id!==id)
        setTodos(update)
     }
     const enterEditMode=(id,text)=>{
      setEditMode(true)
      setEditId(id)
      setEditValue('text')

     }
     const updateTodos=()=>{
      const updatedTodos=todos.map((todo)=>{
        if (todo.id===editId) {
          return{...todos,text:editValue}
        }
        return todo
      })
      setTodos(updatedTodos)
      setEditMode(false)
      setEditId(null)
      setEditValue('')

     }
     

   
  return (
    <div className='container'>
       <h1>ToDoList</h1>
       <div className='main'>
        <input type='text'value={value}
         onChange={(e)=>setValue(e.target.value)}>
          </input>
          {
           editMode?(
           <div>
             <input type='text' value={editValue}
              onChange={(e)=>setEditValue(e.target.value)}>

              </input>
              <button onClick={updateTodos}>Update</button>
           </div>
           ):<button onClick={handleAddButton}>ADD</button>
          }
        {/* <button  onClick={handleAddButton}>ADD</button> */}

       </div>
       <ul>
        {
          todos.map((todo)=>(
            <li key={todo.id}>
                <div className="todo-item">
                    <button onClick={()=>
                      enterEditMode(todo.id,todo.text)}>Edit</button>
                    <span>{todo.text}</span>
                    <button onClick={()=>handleDelete(todo.id)}>
                        Delete
                    </button>
                </div>
            </li>
        ))
        
          /**/
        }
       </ul>
    </div>
  )
}

export default List