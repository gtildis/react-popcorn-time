/** @format */

function Movie(props) {
	return (
		<div className="card">
			<p>{props.movieDetails.title}</p>
			<p>Rating: {props.movieDetails.rating}</p>

			{props.movieDetails.imgURL ? (
				<img src={props.movieDetails.imgURL} alt={props.movieDetails.title} />
			) : (
				<img
					src="https://dummyimage.com/182x268/ffffff/000000"
					alt={props.movieDetails.title}
				/>
			)}

			{props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

			<p>
				<button
					onClick={() => {
						props.callbackDelete(props.movieDetails.title);
					}}
				>
					Delete this movie
				</button>
			</p>
		</div>
	);
}

export default Movie;
