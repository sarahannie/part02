import Part from "./Part"

const Content = (props) => {
  
    return (
      <div>
        <Part {...props.course} />
        <Part {...props.course}   />
        <Part  {...props.course}  />
      </div>
    )
  }

  export default Content