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

const Footer = (props) => (
  <p>{props.name} - {props.courseCode} - {props.section}</p>
)

const App = () => {
  const course = {
    name: 'CSIT 340 - Information Technology Elective 2',
    parts: [
      { name: 'Application Development', exercises: 3 },
      { name: 'Information Assurance and Security', exercises: 3 },
      { name: 'System Integration and Architecture', exercises: 3 }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name="Vincent D. Bocabal" courseCode="CSIT340" section="G8" />
    </div>
  )
}

export default App