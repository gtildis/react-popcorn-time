/** @format */

import { useState } from "react";

function AddMovie(props) {
	const [title, setTitle] = useState("");
	const [rating, setRating] = useState("");
	const [imgURL, setImgURL] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // avoid page refresh

		const newMovie = {
			id: "42",
			title: title,
			year: 2023,
			genres: ["Drama", "Adventure"],
			rating: rating,
			imgURL: imgURL,
		};

		props.callbackAdd(newMovie);
		//clear form
		setTitle("");
		setRating("");
	};

	return (
		<section className="AddMovie">
			<form onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						placeholder="enter the title"
						required={true}
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</label>
				<label>
					Rating:
					<input
						type="number"
						name="rating"
						min="0"
						max="10"
						required={true}
						placeholder="enter the rating"
						value={rating}
						onChange={(e) => {
							setRating(e.target.value);
						}}
					/>
				</label>
				<label>
					Image:
					<input
						type="image"
						name="imgURL"
						placeholder="input an image as a link"
						width="48"
						height="48"
						value={imgURL}
						alt={title}
						onChange={(e) => {
							setImgURL(e.target.value);
						}}
					/>
				</label>

				<button>Create</button>
			</form>
		</section>
	);
}
export default AddMovie;
