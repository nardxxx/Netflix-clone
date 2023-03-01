import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css'
import requests from './Requests';


const Banner = () => {

    const [movie, setMovie] = useState([]);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        async function fetchData() {

            const request = await axios
                .get(requests.fetchNetflixOriginals);

            const results = request
                .data.results;

            const rndMovieId = Math.floor(Math.random() * results.length - 1);

            results[rndMovieId] === undefined && fetchData();

            setMovie(
                results[rndMovieId]
            )

            return request;
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (movie?.backdrop_path === undefined) {
            return;
        }

        const image = new window.Image();

        image.src = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

        image.onload = () => {
            setIsImageLoaded(true);
        };
        image.onerror = (e) => {
            setIsImageLoaded(false);
        }

    }, [movie, isImageLoaded])

    const truncane = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header
            className={`banner ${!isImageLoaded ? 'banner--loading' : ''}`}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className="banner__description">
                    {truncane(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner__damper"></div>

            <div className="banner--fadeBottom" />
        </header >

    );
};

export default Banner;