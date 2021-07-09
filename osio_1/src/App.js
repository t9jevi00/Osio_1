import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part}, {props.tasks}
      </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.part1} tasks = {props.tasks1} />
      <Part part = {props.part2} tasks = {props.tasks2} />
      <Part part = {props.part3} tasks = {props.tasks3} />
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
   <>
     <Header course ={course} />
    
     <Content part1={part1} tasks1={exercise1} part2 ={part2} tasks2={exercise2} part3 = {part3} tasks3 = {exercise3}/>
     <Total total = {exercise1 + exercise2 + exercise3}/>
   </>
  )
}

export default App;
