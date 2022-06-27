import React from 'react'


const Course = (props) => {
    return (
      <div>
        <Header course={props.course}/>
        <Content course={props.course}/>
        <Total course={props.course}/>
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h2>
           {props.course.name}
        </h2>
      </div>
    )
  }
  
  const Total = (props) => {
  
    const sum = props.course.parts.reduce((total, part) => total + part.exercises, 0)
    
    return (
    <div>
      <p>Total number of exercises {sum}</p>
    </div>
   )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/> )}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
    <div>
        {props.name} {props.exercises}
    </div>
   )
  }
  
  export default Course