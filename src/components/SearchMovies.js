import React, { useState } from 'react'
import MovieCard from './MovieCard'

export default function SearchMovies() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()

        // <const url here>

        try {
            // fetch returns a promise
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setMovies(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" 
                    type="text" 
                    name="query" placeholder="i.e. Scrooged"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className='card-list'>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}