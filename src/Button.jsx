import React from 'react'

function Button({Good, Neutral, Bad}) {
    
    
  return (
    <div>
      <button onClick={Good}>good</button>
      <button onClick={Neutral}>neutral</button>
      <button onClick={Bad}>bad</button>
    </div>
  )
}

export default Button