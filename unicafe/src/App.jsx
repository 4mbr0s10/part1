import { useState } from 'react'
const Statistics =(props)=>{
  return(
<div>
  <table>
  <tbody>
<StatisticLine text="Good" value={props.good} />
<StatisticLine text="Neutral" value={props.neutral} />
<StatisticLine text="Bad" value={props.bad} />
<StatisticLine text="Average" value={props.total / props.clickTotal} />
<StatisticLine text="Positive" value={props.good / props.clickTotal * 100+'%' }  />
</tbody>
</table>

</div>
  )
}
const StatisticLine =({text, value})=>{

  return(
      
            <tr>
              <td>{text}</td> 
              <td>{value}</td>
            </tr>
      
  )
}
const Button =({onClick, text})=>{
  return(
    <div>
      <button onClick={onClick}>
      {text}
      </button>
      </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [clickTotal, setClickTotal]=useState(0)
  const handleClick= (option)=>{
    switch(option){
      case 'good':
      setGood(good + 1)
      setTotal(total + 1)
      setClickTotal(clickTotal + 1)
      break;
      case 'neutral':
      setNeutral(neutral + 1)
      setTotal(total + 0)
      setClickTotal(clickTotal + 1)

      break;

      case 'bad':
      setBad(bad + 1)
      setTotal(total- 1)
      setClickTotal(clickTotal + 1)

      break;

    }
  }
  return (
    <div>
      <div>
      <h2>give feedback</h2>
      </div>
      
      <Button onClick={()=>handleClick('good')} text="Good"></Button>
      <Button onClick={()=>handleClick('neutral')} text="Neutral"></Button>
      <Button onClick={()=>handleClick('bad')} text="Bad"></Button>
        <h2>Statistics</h2>

      {clickTotal>0 ? (
      <Statistics good={good} neutral={neutral} bad={bad} total={total} clickTotal={clickTotal}></Statistics>
): ( 
  <p>No feedback given.</p>
)}
    </div>
  )
}

export default App