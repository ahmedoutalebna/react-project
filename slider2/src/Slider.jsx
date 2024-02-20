import React, {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {data, states} from './data.js'

const Slider = ()=>{
    const [sliderIndex, setSliderIndex] = useState(0)


    const handleLeftArrow = ()=>{
        console.log('handle the left arrow')
        sliderIndex === 0 ? setSliderIndex(3) : setSliderIndex(prevSliderIndex => prevSliderIndex - 1)
    }
    const handleRightArrow = ()=>{
        console.log('handle the right arrow')
        sliderIndex === 3 ? setSliderIndex(0) : setSliderIndex(prevSliderIndex => prevSliderIndex + 1)
    }
    return(
        <div className="container">
            <div className="top">
                <FontAwesomeIcon icon={faArrowLeft} className='left-arr' onClick={()=> handleLeftArrow()}/>
                <img src={data[sliderIndex]} />
                <FontAwesomeIcon icon={faArrowRight} className='right-arr' onClick={()=> handleRightArrow()}/>  
            </div>
            <div className="states">
                {
                    states.map((index)=>(
                        <span
                            key={index}
                            className="state"
                            style={{backgroundColor : sliderIndex === index ? 'rgb(60, 163, 163)' : 'white'}}
                        ></span>
                    ))
                }                
            </div>
        </div>
       
    )
}
export default Slider 