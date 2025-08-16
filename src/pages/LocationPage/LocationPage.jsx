import axios from "axios"
import { useEffect, useState } from "react"
import s from "./LocationPage.module.css"

export const LocationPage = () => {

  const [locations, setLocations] = useState([])


  const fetchData = (url) => {
    axios.get(url).then((res) => {
      setLocations(res.data.results)
    })
  }

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/location")
  })


  return (
    <div>
      <h1 className={"pageTitle"}>Location Page</h1>
      {locations.length && (
        <>
          {
            <div>
              {locations.map((location) => {
                return (
                  <div className={`pageContainer ${s.border}`} key={location.id} >
                    <p>Название локации: <b>{location.name}</b></p>
                    <p>Тип локации: <b>{location.type}</b></p>
                    <p>Измерение, в котором находится местоположение: <b>{location.dimension}</b></p>
                    <p>Количество персонажей, которых видели в данной локации: <b>{location.residents?.length}</b></p>
                  </div>
                )
              })}
            </div>
          }
        </>
      )}
    </div>
  )
}