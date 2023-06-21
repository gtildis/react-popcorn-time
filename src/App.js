/** @format */
import { useState } from "react";
import movies from "./components/data/movies.json";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";

function App() {
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
	const deleteMovie = (movieId) => {
		// console.log("deleting movie with id....", movieId);
		// moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !
		const newList = moviesToDisplay.filter((element) => {
			return element.id !== movieId;
		});
		setMoviesToDisplay(newList);
	};

	return (
		<div className="App">
			<body>
				<Header numberOfMovies={moviesToDisplay.length} />
				<Main listOfMovies={moviesToDisplay} callbackDelete={deleteMovie} />
				<Footer />
			</body>
		</div>
	);
}

export default App;
