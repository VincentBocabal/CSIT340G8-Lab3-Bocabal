const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => <p>{props.part} {props.exercises}</p>

const Content = (props) => (
  <div>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
  </div>
)

const Total = (props) => (
  <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
)

const App = () => {
  const course = 'CSIT 340 - Information Technology Elective 2'
  const parts = [
    { name: 'Application Development', exercises: 3 },
    { name: 'Information Assurance and Security', exercises: 3 },
    { name: 'System Integration and Architecture', exercises: 3 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App