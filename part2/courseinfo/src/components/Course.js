import React from 'react'
import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course=({course})=> {
  return (
    <>
       <Header title={course.name} />
        {course.parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)}
        <Total total={course.parts.reduce((acc, curr) => acc + curr.exercises, 0)} />
    </>
  )
}

export default Course