/** @format */

import "./Main.css";
import Movie from "./Movie";

function Main(props) {
	// Conditional Rendering: option A (Element Variables)

	return (
		<div className="Main">
			{props.listOfMovies.map((movieObj) => {
				return (
					<Movie
						key={movieObj.id}
						movieDetails={movieObj}
						callbackDelete={props.callbackDelete}
					/>
				);
			})}
		</div>
	);
}

export default Main;
