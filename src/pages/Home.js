import React, { useEffect, useState } from 'react';
import "../styles/Home.css";
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import MoviesService from '../services/MoviesService';


const Home = () => {
  const [albums, setAlbums] = useState([]);
  const [search, setsearch] = useState("");

  const searchFilm = () => {
    if (search === "") fetchMovies();
    // Création d'un nouveau catalogue dans lequel on va afficher uniquement le nom des films correspondant à la recherche
    // La valeur recherchée et la valeur des films est en minuscule pour faciliter la saisie
    const newAlbum = albums.filter(album => album.title.toLowerCase().includes(search.toLocaleLowerCase()));
    setAlbums(newAlbum);
  }

  const fetchMovies = async () => {
    // fetch('./DataMovie.json')
    // .then((response) => response.json())
    // .then((res) =>  setAlbums(res.results) )
    // .catch((err) => console.log('erreur', err))
    const reponse = await MoviesService.fetchMovies();
    if (reponse.status === 200) setAlbums(reponse.data.results);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='home'>
        <Navbar />
        <SearchBar
          search={search}
          setsearch={setsearch}
          searchFilm={searchFilm}
        />
        <MovieCard
          albums={albums}
        />
    </div>
  );
};

export default Home;
