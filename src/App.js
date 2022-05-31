import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  // const-definitions
  const course = "Half Stack application development"

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
