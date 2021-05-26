import Jokes from './Jokes'
import { useState, useEffect } from 'react'

const JokeContainer = () => {
  const [joke,setJoke] = useState('')

    useEffect(() => {
      Joking()
  }, [])

  const Joking = async () => {
    const response = await fetch(`https://icanhazdadjoke.com`, {headers:{ Accept: "application/json" }})
    const json = await response.json();
    setJoke(json.joke)
  }


    return (
	<div>
	    <h1>Container</h1>
      <Jokes joke={joke}/>
      <button onClick={() => Joking()}>New Joke</button>
	</div>
    );

};

export default JokeContainer;
