import React from 'react'

const FavMovies = (props) => {
  
    const data=props.movies;
    const setMovie=props.setMovie;

    return <>
        {data.map((e,index)=>{
            return (<div className="movie-img"><img className="" key={index}  src={`${e.Poster}`} alt="Movies"/>
                    <div className="heart" onClick={()=>setMovie(e)}><i class="fa-solid fa-trash"></i></div>
                        
                </div>
            )
        })}
        
    </>
  
}

export default FavMovies