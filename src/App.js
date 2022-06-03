import {useState} from 'react';
import React from 'react';
import Statistics from './Statistics';
import Button from './Button';
import "./App.css"


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState([])
  const [avg, setAvg] = useState(0)


  const Good = () => {
    setTotal(total + 1)
    setAvg(avg + 1)
    setGood(good + 1)
  }
  const Bad = () => {
    setTotal(total + 1)
    setAvg(avg - 1)
    setBad(bad + 1)
  }
  const Neutral = () => {
    setTotal(total + 1)
    setAvg(avg - 0)
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <div className='display'>give feedback</div>
      <Button Good={Good} Bad={Bad} Neutral={Neutral} />
      <div className='display'>Statistics</div>
      <Statistics total={total} bad={bad} good={good} avg={avg} neutral={neutral} />
    </div>
  )
}

export default App