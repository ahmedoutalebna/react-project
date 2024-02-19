import React, {useState} from 'react'
import { FaStar } from "react-icons/fa";

const Star = ({numberOfStars = 5})=>{

    const [rating, setRating] = useState(0)
    const [hover, setHover] =  useState(0)

    const handleClick = (currentIndex)=>{
        setRating(currentIndex)
    }
    const handleHover = (currentIndex)=>{
        setHover(currentIndex)
    }
    const handleLeave = ()=>{
        setHover(rating)
    }
    return(
        <div className="container">
        {[...Array(numberOfStars)].map((_, index)=>{
            index++
            return(
                <FaStar
                    key={index}
                    size={40}
                    onClick={()=> handleClick(index)}
                    onMouseEnter={()=> handleHover(index)}
                    onMouseLeave={()=> handleLeave()}
                    color={index <= (rating || hover) && 'gold'}
                />
            )
        })}
        </div>
    )
}
export default Star