import React from 'react'
import { Actions } from './App'
import styled from 'styled-components'
const  DIV = styled.div`
width:70%;
background-color:transparent;
display:flex;
align-items:center;
justify-content:space-between;
margin-top:15px;
border-radius:10px;
border:1px solid rgba(255,255,255,.5);
min-height:35px;
overflow:hidden;
max-height:35px;
`
const MAIN = styled.div`
width:60px;
display:flex;
padding:8px 0px;
align-items:center;
justify-content:space-around;


`
const BUTTON = styled.button`
margin-right:8px;
height:27px;
display:flex;aign-items:center;
justify-content:cemter;

`
const SPAN = styled.span`
color: red;
font-zize:1.1em;
margin-left:5px;
text-transform:lower-case;
overflow:hidden;
text-overflow:ellipsis;
width:60%;
white-space:nowrap;

letter-spacing:-.02em`

function TODO({todo, dispatch}) {
    const handleDelete=()=>{
        dispatch({type:Actions.DELETE_TODO, payload:{id:todo.id}})

    }
    const handleToggle=()=>{
        dispatch({type:Actions.TOGGLE_TODO, payload:{id:todo.id}})
    }
  return (
    <DIV><SPAN style={{textDecoration:todo.complete? 'line-through': 'none'}}>{todo.name}</SPAN>
    <MAIN>
    <BUTTON onClick={()=>{handleDelete(todo)}}><box-icon name='trash' type='solid' animation='tada' color='#870e0e'style={{height:20}} ></box-icon></BUTTON>
    <BUTTON onClick={()=>handleToggle(todo)}><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></BUTTON>
    </MAIN></DIV>
  )
}

export default TODO