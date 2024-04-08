import React, {useState} from 'react'
import './tree.css'
const Tree = () => {
    const[icon1, setIcon1] = useState("fa-solid fa-plus")
    const[icon2, setIcon2] = useState("fa-solid fa-plus")
    const[icon3, setIcon3] = useState('fa-solid fa-plus')
    const[icon4, setIcon4] = useState('fa-solid fa-plus')
    const handleFirstTree = ()=>{
        icon1 === "fa-solid fa-plus" ? setIcon1('fa-solid fa-minus') : setIcon1('fa-solid fa-plus')
    }
    const handleSecondTree = () =>{
        icon2 === 'fa-solid fa-plus' ? setIcon2('fa-solid fa-minus') : setIcon2('fa-solid fa-plus')
    }
    const handleSubTrees = ()=>{
        icon3 === 'fa-solid fa-plus' ? setIcon3('fa-solid fa-minus') : setIcon3('fa-solid fa-plus')
    }
    const handleSubTree = ()=>{
        icon4 === 'fa-solid fa-plus' ? setIcon4('fa-solid fa-minus') : setIcon4('fa-solid fa-plus')
    }
    return (
        <div className='treeview-container'>
            <div className='home'>
                Home
            </div>
            <div className="profiles">
                <span>Profiles</span>    
                <i className={icon1} onClick={handleFirstTree}></i>
            </div> 
            {
                icon1 === 'fa-solid fa-minus' && (
                    <div className="profile-content">
                        <div className="profile">
                            <span>profile 1</span>
                            <i className={icon3} onClick={handleSubTrees}></i>
                        </div>
                        <div className="profile">
                        <span>profile 2</span>
                            <i className={icon4} onClick={handleSubTree}></i>
                        </div>
                    </div>
                )
            }
            <div className="settings">
                <span>Settings</span>
                <i className={icon2} onClick={handleSecondTree}></i>
            </div>
            {
                icon2 === 'fa-solid fa-minus' && (
                    <div className="profile-content">
                        <div className="profile">
                            <span>setting 1</span>
                            <i className='fa-solid fa-plus' ></i>
                        </div>
                        <div className="profile">
                        <span>settings 2</span>
                            <i className='fa-solid fa-plus'></i>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Tree