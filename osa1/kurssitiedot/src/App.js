import React from 'react'

const App = () => {
  const course = {
    name:'Half Stack application development',
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
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        Course name {props.course}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>
      Total number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  </div>
 )
}

const Content = (props) => {
  return (
    <div>
      <p>Courses and exercises
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
      {props.part} {props.exercises}
  </div>
 )
}


export default App