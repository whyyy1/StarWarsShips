import React, { useEffect, useState } from 'react'



function Films({ data,name}) {

    const [filmData, setFilmData] = useState([])

    async function getFilms() {
        let emptyarr = []
        for (let film of data) {
            let response = await fetch(film)
            const filmData1 = await response.json()

            emptyarr.push(<h3>{filmData1.title}</h3>)


        }
        setFilmData(emptyarr)

    }

    function GetData() {
        let arr = []
        for (let title of filmData) {

            arr.push(<h3>{title}</h3>)

        }
        return (
            arr
        )

    }
    useEffect(() => {
        getFilms()

    }, [])
    return (
        <div>Films
            <GetData />
            {/* for(let film of filmData){
                film
            } */}
        </div>
    )
}

export default Films