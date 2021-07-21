import React, {useState} from 'react'


const Button = ({ handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  //console.log(props.average)
  if(props.all === 0){
    return(
    <tbody>
      <tr>
        <td>
          No feedback
        </td>
      </tr>
    </tbody>
    )
  }
  return(
    <>

            <StatisticsLine text="Good:" value={props.good}/>

            <StatisticsLine text="Neutral:" value={props.neutral}/>

            <StatisticsLine text="Bad:" value={props.bad}/>

            <StatisticsLine text="All:" value={props.all}/>

            <StatisticsLine text="Average:" value={props.average}/>

    </>
  )
}

const StatisticsLine = ({text, value}) => {
  return(

      <tbody>
        <tr>
          <td>
            {text} {value}
          </td>
        </tr>
      </tbody>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [calc, setAsd] = useState(0)

  const goodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
    setAsd(calc + 1)
    setAverage(calc / all)
  }

  const neutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
    setAverage(calc / all)
  }

  const badClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
    setAsd(calc - 1)
    setAverage(calc / all)
  }
  
  console.log(calc)
  console.log(average)

  return (
    <>
    <div>
      <h1>Give Feedback</h1>
    </div>
    <div>
      <Button handleClick={goodClick} text = 'good' />
      <Button handleClick={neutralClick} text = 'neutral' />
      <Button handleClick={badClick} text = 'bad' />
    </div>
    <div>
      <h2>
        Statistics:
      </h2>
    </div>
    <table>
      <Statistics all = {all} good = {good} neutral = {neutral} bad = {bad} average = {average}/>
    </table>
    </>
  )

}

export default App;
