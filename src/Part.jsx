const Part = (props) => {
    
    return (
      <div>
       <div key={1}>{props.course.parts}</div>
       <div key={2}>{props.course.parts}</div>
       <div key={3}>{props.course.parts}</div>
      </div>
    )
  }

  export default Part