import React, {useState, useEffect} from 'react'
const Stars = ()=>{
    const data =
                [ 
                    "https://cdn-icons-png.flaticon.com/512/118/118669.png",
                    "https://cdn-icons-png.flaticon.com/512/118/118669.png",
                    "https://cdn-icons-png.flaticon.com/512/118/118669.png",
                    "https://cdn-icons-png.flaticon.com/512/118/118669.png",
                    "https://cdn-icons-png.flaticon.com/512/118/118669.png"
                ]
    const[hover, setHover] = useState(0)
    const[rating, setRating] = useState(0)

    const handleHoverMouse = (e, getCurrentIndex)=>{
        console.log("You trigered the mouse method")
        e.target.src = "./src/assets/star.png"
        setHover(getCurrentIndex)
    }
    const handleLeaveMouse = (e, getCurrentIndex)=>{
        console.log("You trigered the mouse method")
        e.target.src = "https://cdn-icons-png.flaticon.com/512/118/118669.png"
        setHover(rating)
    }
    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    };




    return(
        <div className="stars-container">
            {data.map((item, index) => (
                (index < (hover || rating) ? 
                    <img src="./src/assets/star.png" key={index}
                        onMouseEnter={(e) => handleHoverMouse(e, index)} 
                        onMouseLeave={(e) => handleLeaveMouse(e, index)}
                        onClick={() => handleClick(index)}/>
                    :
                    <img src={item} key={index}
                        onMouseEnter={(e) => handleHoverMouse(e, index)} 
                        onMouseLeave={(e) => handleLeaveMouse(e, index)}
                        onClick={() => handleClick(index)}/>
                )
            ))}

        </div> 
    )
}
export default Stars 