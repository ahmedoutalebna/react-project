import './quiz.css'
import React,{useState, useEffect, useRef} from 'react'
import Qr from './components/Qr'

const Quiz = ()=>
{
    const[count, setCount] = useState(0)
    const[choosed, setChoosed] = useState(false)

    let rep1 = useRef(null)
    let rep2 = useRef(null)
    let rep3 = useRef(null)
    let rep4 = useRef(null)
    let index_reference = useRef("")
    let array_rep = [rep1, rep2, rep3, rep4]
    const[rightAnswer, setRightAnswer] = useState(0)
    const data = [
        {
            "question": "Which device is required for the internet  connection ?",
            "res": ["Modern", "Router", "Internet", "Wifi"],
            "ans": 2
        }, 
        {
            "question": "What is the capital of France? ?",
            "res": ["Paris", "Washignton", "London", "Lebanon"],
            "ans": 0
        }, 
        {
            "question": "What is the largest planet in our solar system ?",
            "res": ["Earth", "Jupiter", "Oranos", "Stars"],
            "ans": 0
        }, 
        {
            "question": "Who is the author of Albidaya ?",
            "res": ["Ibn sina", " Ibn kathir", "ibn taymiya", "Mahmoud Abass"],
            "ans": 1
        }, 
        {
            "question": "Who own space x and tesla ?",
            "res": ["Bill gates", "US Governement", "Nation bank", "ELon musk"],
            "ans": 3
        }
    ]

    // the task to complete is that when you click the right answer 
    // the color green must be highlited in the choosen box 
    // otherwise it must be showing the red color and highliting in the same time
    // the right answer 

    const handleNextQuestion = ()=>{   
        if(choosed)
        {
            setCount(prevCount => prevCount + 1)
            array_rep.forEach((item, index)=>{
                if(index === data[count].ans)
                {
                    item.current.classList.remove("right")
                }        

            })
            let selected_one = document.getElementById(index_reference.current)
            selected_one.classList.remove("wrong")
            setChoosed(false)
        }     
        else
        {
            alert("Please select an answer before you move on")
        }

    }

    const handleTheRightQuestion = (e, answer)=>{
        let idx = data[count].ans
        if(!choosed)
        {
            if(e.target.textContent === data[count].res[idx])
            {
                e.target.classList.add("right")
                setChoosed(true)
                setRightAnswer(prevRightAnswer => prevRightAnswer + 1)
            }
            else
            {
                e.target.classList.add("wrong")
                index_reference.current = e.target.id
                setChoosed(true)
                array_rep[data[count].ans].current.classList.add("right")
            }
        }
        else
        {
            alert("You cannot select more than one response")
        }

    }
    return(
        <div className="root">
            <div className="container">
                {
                    count < 5  && count >= 0 ?(
                        <>
                            <h2>Quiz App</h2>
                            <hr />                
                            <p>
                                {count+1}. {data[count].question} <br /> 
                            </p>
                            <div className="responses">
                                <div className="rep" id='rep1' ref={rep1} onClick={(e)=> handleTheRightQuestion(e, 1)}>
                                    {data[count].res[0]}
                                </div>
                                <div className="rep" id='rep2' ref={rep2} onClick={(e)=> handleTheRightQuestion(e, 2)}>
                                    {data[count].res[1]}
                                </div>
                                <div className="rep" id='rep3' ref={rep3} onClick={(e)=> handleTheRightQuestion(e, 3)}>
                                    {data[count].res[2]}
                                </div>
                                <div className="rep" id='rep4' ref={rep4} onClick={(e)=> handleTheRightQuestion(e, 4)}>
                                    {data[count].res[3]}
                                </div>
                                </div>              
                            <div className="next">
                                <button className="nextButton" onClick={handleNextQuestion}>Next</button>
                                <p className='questions'>{count + 1} of 5 questions</p>
                            </div>
                        </>
                    ):(
                        <div className='result'>
                            <h1> {rightAnswer} out of 5</h1>
                            <button className="resetButton" onClick={()=> {setCount(0)}}>Reset</button> 
                        </div>
                    )
                }

            </div>
        </div>
    )
}
export default Quiz 