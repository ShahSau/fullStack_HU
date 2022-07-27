import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics=({good,bad,neutral})=> {
    const pos = parseFloat(good/(good+neutral+bad)*100).toFixed(2).toString().concat('%')
  return (
    <div>
      <h1>Statistics</h1>
      {good>0 || bad>0 || neutral>0 
      ?
      <table>
          <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good+neutral+bad} />
      <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text="positive" value={pos} />
      </tbody>
      </table>
      :
        <p>No feedback given</p>}
    </div>
  )
}

export default Statistics