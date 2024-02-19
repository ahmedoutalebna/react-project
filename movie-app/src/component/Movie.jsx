// import React, {useState, useEffect} from 'react'

// const Movie = ()=>{
//     const [movie, setMovie] = useState([])
//     useEffect(()=>{
//         const fetchBatmanMovie = async () =>{
//             try
//             {
//                 const url = "http://www.omdbapi.com/?s=batman&apikey=558c7dd7"
//                 const response = await fetch(url)
//                 const data = await response.json()
//                 setMovie(data.Search)
//             }
//             catch(err)
//             {
//                 console.error(err)
//             }
//         }
//         fetchBatmanMovie()
//     }, [])


//     return(

//     )
// }
// export default Movie 