import React, {useState, useEffect} from 'react'
import './color.css'
const Color = ()=>{
   
    const [displayed, setDisplayed] = useState()
    const [choosen, setChoosen] = useState(0)

    const randomHex = ()=>{
        console.log('random method is trigered')
        const letters = "ABCDEF"
        const red = Math.floor(Math.random() * 10)
        const red2 = Math.floor(Math.random() * 10)
        const blue = Math.floor(Math.random() * 6)
        const blue2 = Math.floor(Math.random() * 6)
        const green = Math.floor(Math.random() * 10)
        const green2 = Math.floor(Math.random() * 10)
        const color = `#${red}${red2}${letters[blue]}${letters[blue2]}${green}${green2}`
        setDisplayed(color)
        setChoosen(1)
    }   
    const randomRgb = ()=>{
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const color = `rgb(${red}, ${green}, ${blue})`
        setDisplayed(color)
        setChoosen(2)
    }
    const random = ()=>{
        choosen === 1 ? randomHex() : choosen === 2 && randomRgb()
    }
    return(
        <div className="color-container" style = {{backgroundColor: displayed}}>
            <div className="buttons">
                <button className="hex-color" onClick={()=> randomHex()}>Create HEX Color</button>
                <button className="rgb-color" onClick={()=> randomRgb()}> Create RGB Color</button>
                <button className="random-color" onClick={()=> random()}>Create Random Color</button>
            </div>
            <div className="type-color">
                {
                    choosen === 1 ? <h2>HEX</h2>:choosen === 2 ? <h2>RGB</h2>: null 
                }
            </div>
            <div className="code-color">
                <h1>{displayed}</h1>
            </div>
        </div>
    )
}
export default Color 