
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part=(props)=>{
return(
<div>
      <p>{props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>

</div>
)
}
const Content=(props)=>{


  return(
  
<div>{props.auxParts}</div>
  )
}
const Total=(props)=>{
  return(
    <div>
      <p>Number of exercises {props.sumaTotal}</p>
    </div>
  )
}



const App = () => {
const exercises1=10
const exercises2=7
const exercises3=14

  const sumaTotal= exercises1+exercises2+exercises3
const course ={
  name : 'Half Stack application development',
   parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  }
  ,
  {
    name: 'State of a component',
    exercises: 14
  }
]
}
const courseName = course.name
const auxParts = course.parts.map(value=>(<p key={value.name}>
  {value.name}: {value.exercises}
  </p>))

  return (
    <div>

     
        <Header course={courseName}></Header>
        <Content auxParts={auxParts}></Content>
         <Total sumaTotal={sumaTotal}></Total>  

    </div>
  )
}
export default App