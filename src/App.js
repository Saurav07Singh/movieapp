import React from 'react';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Movies from "./components/Movies"
import './App.css';
import Heading from './components/Header/Heading';
import Search from './components/Header/Search';
import FavMovies from './components/FavMovies';

function App() {

const [moviesList,setMoviesList]=useState([]);
const [search,setSearch]=useState('');
// const [addOrDel,setAddOrDel]=useState(true);
const [favMovie,setFavMovie]=useState(localStorage.getItem("Fav_Movie")?JSON.parse(localStorage.getItem("Fav_Movie")) :[])
console.log(favMovie);

const addFavMovie=(mov)=>
{
  if(favMovie.includes(mov))
    return;
  const resMovie=[mov,...favMovie]
  localStorage.setItem("Fav_Movie",JSON.stringify(resMovie))
  setFavMovie(resMovie);
}
const removeFavMovie=(mov)=>{
  const deletedMovie=favMovie.filter(e=>e!==mov);
  setFavMovie(deletedMovie);
  localStorage.setItem("Fav_Movie",JSON.stringify(deletedMovie))
  
}

const searchMovies=(val)=>{
  setSearch(val)
  
}

const getMovies=async ()=> {

const fetchData=await fetch(`http://www.omdbapi.com/?s=${search}&apikey=aea6ca95`);
const data=await fetchData.json();
if(data.Search)
{
  setMoviesList(data.Search)
}

}
useEffect(()=>{
  getMovies();
},[search])


  return (
   <>
   <div className='HeaderStyles'>
   <Heading  heading={"Movie List"}/>
   <Search   value={search} onSearch={(e)=>searchMovies(e.target.value)} />
   </div>
   <br />
   <div className='movies inline-scroll'>
    
   
    <Movies  setMovie={addFavMovie} movies={moviesList}/>
   
   </div>
   <div className='HeaderStyles'>
   <Heading  heading={"Favorite List"}/>
   </div>
   <br />
   <div className='movies inline-scroll'>
    
    <FavMovies setMovie={removeFavMovie} movies={favMovie} />
   </div>
   
   </>
  );
}

export default App;
