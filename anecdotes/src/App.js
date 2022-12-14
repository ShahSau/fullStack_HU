import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] =useState(new Array(anecdotes.length+1).join('0').split('').map(parseFloat))
  const changequote =()=>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const countvote = () => {
   const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  const x= points.indexOf(Math.max(...points))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
      has {points[selected]} votes
      </p>
      <p>
      <button onClick={changequote}>next anecdote</button>
      <button onClick={countvote}>vote</button>
      </p>
      <h1>Anecdote with most vote</h1>
      <p>{anecdotes[x]}</p>
      <p>has {points[x]} votes </p>
    </div>
  )
}

export default App
