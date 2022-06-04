import {useState} from 'react';
import React from 'react';
import "./App.css";




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])
 
  
  const randomAnecdotes = () => {
    let value = Math.floor(Math.random(selected) * anecdotes.length)
    setSelected( value)
  }


  // increment the value in position 2 by one
  const handleClick = () =>{
    const voteCount= [...vote]
    voteCount[selected]  += 1
    setVote(voteCount)
  }
  
  

    const handleMax = () =>{
     const maxVote =  Math.max(...vote);
     if(maxVote === 0) return null;
     
    const maxList = [];
    vote.forEach((ml, index) => {
      if ( ml === maxVote ) maxList.push(index);
    });

    // if just one Anectodes can get max vote then it will be:
    // points.findIndex(el => el === maxVote)

    return maxList.map((ml, index) => (
      <p key={index} > {anecdotes[ml]} {vote[ml]} votes </p>
    ))

  }
    
  
    

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <br/>
      {anecdotes[selected]} {vote[selected]} votes
      <br/>
     <button onClick={() => handleClick()}> vote </button>
     <button onClick={randomAnecdotes}> next anecdotes</button>
      <br/>
      <h1>Anecdote with the most vote</h1>
      {handleMax()}
      
    </div>
  )
}




export default App