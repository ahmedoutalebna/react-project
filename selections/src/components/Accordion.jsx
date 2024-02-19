import './accordion.css'
import React, {useState} from 'react'
const Accordion = ()=>{
    const[descrip1, setDescrip1] = useState("")
    const[descrip2, setDescrip2] = useState("")
    const[descrip3, setDescrip3] = useState("")
    const[firstOpened, setFirstOpened] = useState(false)
    const[secondOpened, setSecondOpened] = useState(false)
    const[thirdOpened, setThirdOpened] = useState(false)

    const minus = "https://static.vecteezy.com/system/resources/thumbnails/002/205/870/small/minus-sign-icon-free-vector.jpg"
    const data = [
        {
            id: 1,
            response: "Accordion components are user interface elements used for  organizing and presenting content in a collapsible manner. They typically consist of a header, content and an expand/collapse action." 
        },
        {
            id: 2,
            response: "Accordion components are user interface elements used for  organizing and presenting content in a collapsible manner. They  typically consist of a header, content and an expand/collapse action." 
        },
        {
            id: 3,
            response: "Accordion components are user interface elements used for  organizing and presenting content in a collapsible manner. They typically consist of a header, content and an expand/collapse action." 
        }
    ]
    const addLastParagraph = (e)=>{
           if(e.target.classList.value === "first-image" && firstOpened === false)
            {
                setDescrip1(data[0].response)
                setFirstOpened(true)
            }
            if(e.target.classList.value === "first-image" && firstOpened)
            {
                setDescrip1("")
                setFirstOpened(false)   
            }
           if(e.target.classList.value === "second-image" && secondOpened === false)
           {
                setDescrip2(data[1].response)
                setSecondOpened(true)


            }
            if(e.target.classList.value === "second-image" && secondOpened)
            {
                setDescrip2("")
                setSecondOpened(false)
            }
           if(e.target.classList.value === "third-image" && thirdOpened === false)
           {
                setDescrip3(data[2].response)
                setThirdOpened(true)
            }
            if(e.target.classList.value === "third-image" && thirdOpened)
            {
                setDescrip3("")
                setThirdOpened(false)
            }
    
        }
    return(
        <div className="container">
            <div className="heading">
                Enable Multi Selection 
            </div>
            <div className="card-container">
                <div className="title">
                    <p>What are accordion components ?</p>
                    <img src="https://t4.ftcdn.net/jpg/01/26/10/59/360_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" className="first-image" alt="" onClick={(e)=> addLastParagraph(e)}/>
                </div>
                <div className="description" id='description1'>
                    {descrip1}
                </div>
            </div>
            <div className="card-container">
                <div className="title">
                    <p>What are accordion components ?</p>
                    <img src="https://t4.ftcdn.net/jpg/01/26/10/59/360_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" alt="" className="second-image" onClick={(e)=> addLastParagraph(e)}/>
                </div>
                <div className="description">
                        {descrip2}
                </div>
            </div>
            <div className="card-container">
                <div className="title">
                    <p>What are accordion components ?</p>
                    <img src="https://t4.ftcdn.net/jpg/01/26/10/59/360_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg" alt="" className="third-image" onClick={(e)=> addLastParagraph(e)}/>
                </div>
                <div className="description">
                    {descrip3}
                </div>
            </div>
        </div>
        
    )
}
export default Accordion