import React from 'react'
import styled from 'styled-components'
const H1 = styled.h5`
 font-size:1.4em;`
function HEADER() {
  return (
    <div><H1 style={{color:'whitesmoke'}}>TODO-LIST</H1></div>
  )
}

export default HEADER