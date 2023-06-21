/** @format */

import "./Header.css";

function Header(props) {
	let message = "";
	if (props.numberOfMovies > 0) {
		message = <h1>Number of movies: {props.numberOfMovies}</h1>;
	} else {
		message = <h1>Sorry, no movies to display</h1>;
	}

	return (
		<div className="Header">
			<h1>Popcorn Time 🍿🍿</h1>
			{message}
		</div>
	);
}

export default Header;
