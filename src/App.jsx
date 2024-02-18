import React, { useReducer, useState } from 'react'
import TODO from './TODO'
import styled from 'styled-components'
export const Actions ={
  ADD_TODO:'add-todo',
  DELETE_TODO:'delete-todo',
TOGGLE_TODO:'toogle'

}
import HEADER from './HEADER';

const DIV =styled.div`
width:80vw;
height:90vh;
background-color:black;
display:flex;
align-items:center;
padding:70px 0px;
flex-direction:column;
overflow:hidden;
border-radius:25px;
overflow-y:scroll; 

`
const FORM =styled.form`
display:flex;
align-items:center;
justify-content:space-around;
width:50%;
margin-top:35px;
`
const INPUT = styled.input`
height:33px;
border-radius:9px;
    
$:active{
  box-shadow:5px white;
}
`
const BUTTON =styled.button`
padding:5px 18px;
margin-left:10px;
border-radius:8px;
font-weight:bolder;
font-size:1.1em;`



const reducer =(todos,action)=>{
  switch(action.type){
    case Actions.ADD_TODO:return [...todos ,newTodo(action.payload.input)]
    case Actions.TOGGLE_TODO : return todos.map(todo=>{
      if(todo.id===action.payload.id){
        return {...todo ,complete:!todo.complete}
      }
      return todo
    })

    case Actions.DELETE_TODO : return todos.filter(todo=>todo.id!==action.payload.id)
    default:return todos
  }

}

const newTodo=(todo)=>{
  return {id :Date.now(), name:todo ,complete:false}
}


const App = () => {
  const[todos,dispatch]=useReducer(reducer,[])
  const [input ,setInput]= useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:Actions.ADD_TODO, payload:{input:input}})
    setInput('')
  }
  console.log(todos)
  return (
    <DIV>
     <HEADER></HEADER>
    <FORM action="" id="change" name='change' onSubmit={handleSubmit}>
      <INPUT type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <BUTTON type='submit'> ADD</BUTTON>
    </FORM>
    {todos.map(todo=>{
     return  <TODO key={todo.id} todo={todo}  dispatch={dispatch}/>
    })}
    
    </DIV>
  )
}

export default App