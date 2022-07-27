import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics=({good,bad,neutral})=> {
  return (
    <>
      <h1>Statistics</h1>
      {good>0 || bad>0 || neutral>0 
      ?
      <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good+neutral+bad} />
      <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)} />
      <p>positive {good/(good+neutral+bad)*100}%</p>
      </>
      :
        <p>No feedback given</p>}
    </>
  )
}

export default Statistics