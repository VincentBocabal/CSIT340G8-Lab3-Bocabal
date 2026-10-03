const Header = (props) => <h1>{props.course}</h1>
const Part = (props) => <p>{props.part} {props.exercises}</p>

const Content = (props) => (
  <div>
    <Part part={props.part1} exercises={props.exercises1} />
    <Part part={props.part2} exercises={props.exercises2} />
    <Part part={props.part3} exercises={props.exercises3} />
  </div>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

const App = () => {
  const course = 'CSIT 340 - Information Technology Elective 2'
  const part1 = 'Application Development'
  const exercises1 = 3
  const part2 = 'Information Assurance and Security'
  const exercises2 = 3
  const part3 = 'System Integration and Architecture'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App