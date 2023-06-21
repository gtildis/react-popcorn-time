/** @format */
import { useState } from "react";
import movies from "./components/data/movies.json";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import AddMovie from "./components/AddMovie";

function App() {
	const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

	const addMovie = (newMovie) => {
		const newList = [newMovie, ...moviesToDisplay];
		setMoviesToDisplay(newList);
	};

	const deleteMovie = (movieTitle) => {
		// console.log("deleting movie with id....", movieId);
		// moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !
		const newList = moviesToDisplay.filter((element) => {
			return element.title !== movieTitle;
		});
		setMoviesToDisplay(newList);
	};

	return (
		<div className="App">
			<Header numberOfMovies={moviesToDisplay.length} />
			<AddMovie callbackAdd={addMovie} />
			<Main listOfMovies={moviesToDisplay} callbackDelete={deleteMovie} />
			<Footer />
		</div>
	);
}

export default App;
