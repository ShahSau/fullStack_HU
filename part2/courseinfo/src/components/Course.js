import React from 'react'
import Header from './Header'
import Part from './Part'

const Course=({course})=> {
  return (
    <>
       <Header title={course.name} />
        {course.parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises} />)}
    </>
  )
}

export default Course