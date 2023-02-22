import { Fragment, useState } from "react";
import classes from './APIExamples.module.css';
const APIExamples = () => {

    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/').then((response) => {
            return response.json();
        }).then(data => {
            const transformedData = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    opening_text: movie.opening_crawl,
                    release_date: movie.release_date
                }
            })
            setMovies(data.results)
            console.log(transformedData)
        })
    }
//async await 
    // async function fetchMoviesHandler() {
    //     const response = await fetch('https://swapi.dev/api/films/');
    //     const data = await response.json();


    //     const transformedData = data.results.map(movie => {
    //         return {
    //             id: movie.episode_id,
    //             title: movie.title,
    //             opening_text: movie.opening_crawl,
    //             release_date: movie.release_date
    //         }
    //     })
    //     setMovies(data.results)

    // }

    // post request 

    // async function addMovieHandler(movie) {
    //     const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json', {
    //       method: 'POST',
    //       body: JSON.stringify(movie),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //   }
    
    //   let content = <p>Found no movies.</p>;
    
    //   if (movies.length > 0) {
    //     content = <MoviesList movies={movies} />;
    //   }
    
    //   if (error) {
    //     content = <p>{error}</p>;
    //   }
    
    //   if (isLoading) {
    //     content = <p>Loading...</p>;
    //   }

    return (
        <div className={classes.main}>
            <button onClick={fetchMoviesHandler}>Fetch movies</button>
        </div>
    )
}

export default APIExamples;