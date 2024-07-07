import {Header} from './components/Header'
import {Content} from './components/Content'
import {Total} from './components/Total'




const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1.name} part2 = {part2.name} part3={part3.name} 
        exercise1={part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises} />
      <Total exercise1 = {part1.exercises} exercise2 = {part2.exercises} exercise3 = {part3.exercises} />
    </div>
  )
}

export default App