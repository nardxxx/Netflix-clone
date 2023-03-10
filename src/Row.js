import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovie] = useState([])

    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const renderPosts = () => (
        movies.map(
            (movie) => {
                return ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        < img
                            loading='lazy'
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
            }
        )
    )

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {renderPosts()}
            </div>
        </div>
    );
};
export default Row;