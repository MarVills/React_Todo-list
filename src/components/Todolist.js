import React, {useState} from 'react'

const Todolist = () =>{

  const [state, setState] = useState({
    todo: '',
    todolist: [],

  })

  const {todo, todolist} = state

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setState({...state, [name]: value})
  }

  
  return(
    <div className='todolist-main'>
      <div className='form-wrapper'>
        <input 
        type='text' 
        name='todo'
        placeholder='Create todolist' 
        value={todo}
        onChange={handleOnChange}
        />
        <button>Add</button>
      </div>
      <div className='table-main'>
        <div className='header-wrapper'>
          <span>To do</span>
          <span>Action</span>
        </div>     
        {
          todolist.length ?
          todolist.map((value,index)=> (
            <div className='row-wrapper'>
            <span>Do my homeworkdgsdfgsdfghdfghdfghdfsd</span>
            <button>Edit</button>
            <button>Delete</button>
            </div>
          )) : <span>No records found</span>
        }
      </div>
    </div>
  )
}

export default Todolist