

import React, { useState } from 'react'

const Button = ({ handleClick, text})=> {
  return(
      <button onClick = {handleClick}>
        {text}
      </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const votes = new Uint8Array(anecdotes.length)
  const copy = [...votes]
   
  const [selected, setSelected] = useState(0)


  const randomQuote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
    console.log("copy[selected]: " + copy[selected])
  }

  const castVote = () => {
    copy[selected] += 1
    console.log("copy: " + copy)
    console.log("votes: " + votes)
    console.log("copy[selected]: " + copy[selected])
  }

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <Button handleClick = {randomQuote} text="Next quote"/>
      </div>
      <div>
        <Button handleClick = {castVote} text="vote" />
      </div>
      <div>
        Votes: {copy[selected]}
      </div>
    </>
  )
}

export default App;
