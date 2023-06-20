/** @format */
import { useState } from "react";
import movies from "../components/data/movies.json";
import "./Main.css";
function Main() {
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

	let message = "";
	if (moviesToDisplay.length > 0) {
		message = <h1>Number of movies: {moviesToDisplay.length}</h1>;
	} else {
		message = "Sorry no movies to display";
	}

	const deleteMovie = (movieId) => {
		const newList = moviesToDisplay.filter((el) => {
			return el.id !== movieId;
		});

		setMoviesToDisplay(newList);
	};

	return (
		<div className="Main">
			<h1>{message}</h1>

			{moviesToDisplay.map((e) => {
				return (
					<div key={e.id} className="card">
						<h1>{e.title}</h1>
						<p>Rating: {e.rating}</p>
						{e.imgURL ? <img src={e.imgURL} /> : <p>there is no image</p>}
						{e.rating > 8 && <p>RECOMENDED</p>}
						<button
							onClick={() => {
								deleteMovie(e.id);
							}}
						>
							Delete this movie
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default Main;
