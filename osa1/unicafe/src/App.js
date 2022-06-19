import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const voteGood = () => {
    setGood(good +1)
    setAll(all +1)
  }

  const voteNeutral = () => {
    setNeutral(neutral +1)
    setAll(all +1)
  }

  const voteBad = () => {
    setBad(bad +1)
    setAll(all +1)

  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={voteGood}
        text='good'
      /> 
      <Button
        handleClick={voteNeutral}
        text='neutral'
      /> 
      <Button
        handleClick={voteBad}
        text='bad'
      /> 

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      
    </div>
  )
}


const Statistics = (props) => {

  if (props.all == 0) {
    return (
      <div>
        No feedback given yet
      </div>
    )
  }
 
  return (
    <div>

      <h1>Statistics</h1>

      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={(props.good * 1 + props.bad * -1) / (props.all)} />
      <StatisticLine text="% of positive" value ={props.good / (props.all) * 100} />
      
    </div>
  )    
}

const StatisticLine = (props) => {

  return (
    <div>
      {props.text} {props.value}
    </div>
    
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}



export default App