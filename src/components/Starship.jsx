import React, { useState } from 'react'
import './Starships.css'
import Films from './Films'
import Pilots from './Pilots'

function Starship({ ship ,index }) {

    const [display, setDisplay] = useState(false)
    
    
    function handleClick(event){
        console.log(event.target)
        setDisplay((previousState)=> !previousState)
       
  
    }

    

    function DisplayInfo(){
        return (
            Object.entries(ship).map((shipAcc,index) =>
            {switch (shipAcc[0]){
                case 'films':
                    return( <Films data={shipAcc[1]}/>)
                case 'pilots':
                    return(<Pilots data={shipAcc[1]}/>)
                case 'url':
                    return(<a  href={shipAcc[1]}/>)
                default:
                    return(
                        <div>
                        <h2>{shipAcc[0]}</h2>
                        <p>{shipAcc[1]}</p>
                    </div>
                    )
            }
        }
            )
        )
    }


    return (
        <div className='starship' >
            <button className='ignite' id={index} onClick={(event) => handleClick(event)} key={ship.name}>{ship.name}</button>
            {display ? <DisplayInfo/> : null}

        </div>
    )
}

export default Starship