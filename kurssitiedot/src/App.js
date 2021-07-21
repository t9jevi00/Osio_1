import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course.name}
      </h1>
    </div>
  )
}

const Part = (props) => {
  
  return(
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part name = {props.parts.map(part => <div>{part.name} {part.exercises}</div>)} />
    </div>
  )
}

const Total = (props) => {
  console.log(props.course)
  console.log(props.parts)
  const asd = props.parts.map(part => part.exercises)
  let sum = 0

  for (let i = 0; i < asd.length; i++) {
    sum += asd[i];
  }
  console.log(sum)
  return(
    <div>
      <p>
        {sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
   <>
     <Header course = {course} />
     <Content parts = {course.parts}/>
     <Total parts = {course.parts}/>
     
   </>
  )
}

export default App;
