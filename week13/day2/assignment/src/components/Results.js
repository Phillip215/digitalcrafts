import { useSelector } from "react-redux";


const Results = (props) => {
    const info = useSelector((state) => state.info)

    return (
	<div>
	    <h1>Info</h1>
        <p>{info.name}</p>
        <p>{info.email}</p>
	</div>
    );

};

export default Results;
