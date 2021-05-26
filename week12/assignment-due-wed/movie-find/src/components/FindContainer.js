import { useState, useEffect} from 'react'
import Results from './Results'
import Movie_Api_Key from '../shh'
import './findCon.css'


const FindContainer = () => {
  const [mov, setMov] = useState('')
  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('')
  const [actors, setActors] = useState('')
  const [rating, setRating] = useState('')
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    Find()
  }, [])

  const Find = async () => {
    const info = await fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=${Movie_Api_Key}&t=${search}`, {headers:{ Accept: 'application/json'}})
    const json = await info.json();
    setTitle(json.Title)
    setActors(json.Actors)
    setMov(json.Awards)
    setRating(json.Rated)
    setPoster(json.Poster)
    setYear(json.Year)
  }


    return (
	<div className='middle'>
	    <h2 className='find'>FiNd YoUr FaVoRiTe MoViE</h2>

      <input type='text'onChange={(e) => setSearch(e.target.value)} placeholder='SeArCh YoUr MoViE' />
      <br></br>
      <button onClick={() => Find()}>SeArCh</button>

      <Results mov={mov} title={title} rating={rating} poster={poster}
      actors={actors} year={year}/>
	</div>
    );

};

export default FindContainer;
