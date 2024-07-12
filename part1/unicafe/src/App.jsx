import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ title, good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <Header text={title}/>
      <table>
        <tbody>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
      <Statistic text='all' value={total}/>
      <Statistic text='average' value={(good - bad) / total}/>
      <Statistic text='positive' value={`${good / total * 100} %`}/>
      </tbody>
      </table>
    </div>
  )
}
const Statistic = ({ text, value }) => <tr>
  <td>{text}</td>
  <td>{value}</td>
</tr> 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  return (
    <div>
      <Header text='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header text='statistics'/>
      {total === 0 ? (
        <p>No feedback given</p>) : (
      <Statistics title = 'statistics' good = {good} neutral = {neutral} bad = {bad} />
)}
    </div>
  )
}

export default App