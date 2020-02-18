import React, { useState, useEffect } from "react";
import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from "./config";

import HeroImage from "./heroImage/HeroImage";
import SearchBar from "./searchBar/SearchBar";
import Grid from "./grid/Grid";
import MovieThumb from "./movieThumb/MovieThumb";
import LoadMoreBtn from "./loadMoreBtn/LoadMoreBtn";
import Spinner from "./spinner/Spinner";

// hooks
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state);

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    );
};

export default Home;
