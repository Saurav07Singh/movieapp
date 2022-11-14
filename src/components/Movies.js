import React from "react"

const Movies =(props)=>{
    const data=props.movies;
    const setMovie=props.setMovie;
    // const addOrDel=props.addOrDel
    //console.log(addOrDel)
    //console.log(data);
    return <>
        {data.map((e,index)=>{
            return (<div className="movie-img"><img className="" key={index}  src={`${e.Poster}`} alt="Movies"/>
                    <div className="heart" onClick={()=>setMovie(e)}><i class="fa-solid fa-heart"></i></div>
                        
                </div>
            )
        })}
        
    </>
}

export default Movies