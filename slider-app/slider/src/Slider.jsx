import './slider.css'
import {useState, useEffect, useRef} from 'react'
const Slider = ()=>{
    // the problem is that when you click the right arrow 
    // the id must increase and when you click the 
    // left arrow the id must decrease so the idea that 
    // i have that you must 
    const sources = [
    'https://images.pexels.com/photos/19139388/pexels-photo-19139388/free-photo-of-cafe-in-corner-tenement.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    'https://images.pexels.com/photos/12187235/pexels-photo-12187235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/18708150/pexels-photo-18708150/free-photo-of-classic-doorway-at-old-house-entrance-with-columns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    const[id, setId] = useState(0)


    const handleLeftArrow = ()=>{
        console.log("Here in the left arrow")
        setId((prevId) => (prevId === 0 ? 2 : prevId - 1))
    }
    const handleRightArrow = ()=>{
        console.log("Here in the right arrow")
        setId((prevId) => (prevId === 2 ? 0 : prevId + 1))
    }
    
    return(
        <div className="container">
            <div className="first-part">
                <span className="left-arrow" onClick={handleLeftArrow}>←</span>
                <img src={sources[id]} alt="" className='image-source' />
                <span className="right-arrow" onClick={handleRightArrow}>→</span>
            </div>
            <div className="states">
                <div className="circle" id="first-circle" style={{backgroundColor : id === 0 ? 'red' : 'white'}}></div>
                <div className="circle" id="second-circle" style={{backgroundColor: id === 1 ? 'red' : 'white'}}></div>
                <div className="circle" id="third-circle" style={{backgroundColor: id === 2 ? 'red' : 'white'}}></div>
            </div>
        </div>  
        
    )
}
export default Slider 