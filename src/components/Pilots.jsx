import React, { useEffect, useState } from 'react'



function Pilots({ data}) {

    const [pilotData, setPilotData] = useState([])

    async function getPilots() {
        let emptyarr = []
        for (let film of data) {
            let response = await fetch(film)
            const pD = await response.json()
            
            emptyarr.push(<h3>{pD.name}</h3>)


        }
        setPilotData(emptyarr)

    }

    function GetData() {
        let arr = []
        for (let pilot of pilotData) {

            arr.push(<h3>{pilot}</h3>)

        }
        return (
            arr
        )

    }
    useEffect(() => {
        getPilots()

    }, [])
    return (
        <div>Pilots
            <GetData />
            
        </div>
    )
}

export default Pilots