import React from 'react'

const Total=({parts})=> {
  let total=0
  parts.map(part=>{
   return total+=part.exercises 
  })
  return (
    
    <p>Number of exercises {total}</p>
  )
}

export default Total