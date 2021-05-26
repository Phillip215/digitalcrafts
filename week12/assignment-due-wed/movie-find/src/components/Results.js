import './results.css'

const Results = (props) => {
    return (
	<div className='results'>
    <ul>
	    <h2>{props.title}</h2>

        <li>
            <h3>Cast</h3>
            {props.actors}
        </li>

        <li>
            <h3>Awards</h3>
            {props.mov}
        </li>

        <li>
            <h3>Rated</h3>
            {props.rating}
        </li>
        <li>
            <h3>Year</h3>
            {props.year}
        </li>
        <br></br>
        <li><img src={props.poster} alt='poster'/></li>
    </ul>
	</div>
    );

};

export default Results;
