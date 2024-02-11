import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function UpdateTodo() {

    const todos=useSelector(state=>state.todos);
    const dispatch = useDispatch();

  return (
    <div>Update TODO:</div>
  )
}

export default UpdateTodo