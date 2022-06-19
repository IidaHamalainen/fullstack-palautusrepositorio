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
      <h1>Give feedback</h1>
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
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      
    </div>
  )
}


const Statistics = ({good, neutral, bad, all}) => {

  if (all == 0) {
    return (
      <div>
        No feedback given yet
      </div>
    )
  }
 
  return (

    <table>
      <tbody>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
      
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={(good * 1 + bad * -1) / (all)} />
        <StatisticLine text="positive" value ={good / (all) * 100 + "%"} />
      </tbody>
    </table>
  );    
};

const StatisticLine = ({text, value}) => {

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>  
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