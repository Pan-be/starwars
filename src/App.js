import React, { useState } from "react"

import MoviesList from "./components/MoviesList"
import "./App.css"

function App() {
	const [movies, setMovies] = useState([])

	const fetchMoviesHandler = () => {
		console.log("clcked")
		fetch("https://swapi.py4e.com/")
			.then((response) => {
				response.json()
			})
			.then((data) => {
				const tranformedMovies = data.results.map((movieData) => {
					return {
						id: movieData.episode_id,
						title: movieData.title,
						openingText: movieData.openning_crawl,
						releaseDate: movieData.release_date,
					}
				})
				setMovies(tranformedMovies)
			})
	}

	return (
		<React.Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</React.Fragment>
	)
}

export default App
