import React, {useState, useEffect} from 'react'
import data from './data.js'
import './accordion.css'
const Acc = ()=>{

    const [selectedId, setSelectedId] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiplySelection, setMultiplySelection] = useState([])
    useEffect(()=>{
        console.log(enableMultiSelection)
    }, [enableMultiSelection])
    const addLastParagraph = (currentId)=>{
        setSelectedId(currentId === selectedId ? null : currentId) 
      
    }
    const handleMultiSelection = (currentId)=>{
    
        let copyMultiply = [...multiplySelection]
        let currentIdIndex = copyMultiply.indexOf(currentId)
        if( currentIdIndex === -1)
        {
            copyMultiply.push(currentId)
        }
        else
        {
            copyMultiply.splice(currentIdIndex, 1)
        }
        setMultiplySelection(copyMultiply)
        console.log(copyMultiply)
    }
    return(
        <div className="container">
            <div className="heading" onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection 
            </div>
            {
                data.map((item)=>(
                    <div className="card-container" key={item.id}>
                        <div className="title">
                            <p>{item.question}</p>
                            <img src={item.img} alt="" onClick={()=> enableMultiSelection ? handleMultiSelection(item.id) : addLastParagraph(item.id)}/>
                        </div>
                        <div className="description" id='description'>
                            {
                                enableMultiSelection ? multiplySelection.indexOf(item.id) !== -1 && item.response : selectedId === item.id && item.response 
                            }
                            {/* {selectedId === item.id && item.response } */}
                        </div>
                    </div>      
                ))
            }

        </div>
    )
}
export default Acc 