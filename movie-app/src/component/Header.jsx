// import React, {useState, useEffect} from 'react'


// const Header = ()=>{
//     const[val, setVal] = useState()
//     const[searchMovie, setSearchMovie] = useState([])
//     useEffect(()=>{

//     }, [])
//     const fetchMovie = async()=>{
//         let url = `http://www.omdbapi.com/?s=${val}&apikey=558c7dd7`
//         try
//         {
//             const response = await fetch(url)
//             const data = await response.json()
//             setSearchMovie(data.Search)
//         }
//         catch(err)
//         {
//             console.error(err)
//         }
//     }
//     const handleInputValue = (e)=>{
//         setVal(e.target.value)
//     }
//     return(
//         <div className="header">
//             <h1 className='head-title'>MovieLand</h1>
//             <div className="search">
//                 <input type="text" placeholder='Search for movies' className='input-value'onChange={(e)=> handleInputValue(e)}/>
//                 <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="" onClick={fetchMovie}/>
//             </div>
//         </div>
//     )
// }
// export default Header 