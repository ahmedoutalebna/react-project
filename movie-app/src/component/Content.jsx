import React, {useState, useEffect} from 'react'

import './content.css'
const Content = ()=> {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(()=>{
        fetchMovie("Batman")
    }, []) 

    const fetchMovie = async(title)=>{
        try
        {
            const data = await fetch(`http://www.omdbapi.com/?&apikey=558c7dd7&s=${title}`)
            const response = await data.json()
            setMovies(response.Search)
        }
        catch(err)
        {
            console.error(err)
        }
    }

    return(
        <div className="content-root">
            <div className="header">
                <h1 className='head-title'>MovieLand</h1>
                <div className="search">
                    <input type="text" placeholder='Search for movies' className='input-value'onChange={(e)=> setSearchTerm(e.target.value)}/>
                    <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" onClick={()=> fetchMovie(searchTerm)}/>
                </div>
            </div>        
            {
                movies?.length > 0 ?(
                    <div className="movie-root">
                    {
                        movies.map((movie) => (
                            <div className="movie" key={movie.imdbID}>
                                <img src={movie.Poster} alt="" />
                                <div className="second">
                                    <h4>{movie.Type}</h4>
                                    <h3>{movie.Title}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                )
                :
                (
                    <div className="error">
                        <h1>Not found </h1>
                    </div>
                )
            }    

        </div>
      
           
    )
}
export default Content