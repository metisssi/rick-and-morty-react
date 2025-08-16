import axios from "axios"
import { useEffect, useState } from "react"
import s from "./EpisodePage.module.css"


export const EpisodePage = () => {


  const [episodes, setEpisodes] = useState([])

  const fetchData = (url) => {
    axios.get(url).then((res) => {
      console.log(res)
      setEpisodes(res.data.results)
    })
  }


  useEffect(() => {
    fetchData('https://rickandmortyapi.com/api/episode')
  })
  return (
    <div>
      <h1 className={"pageTitle"}>Episode Page</h1>
      {episodes.length && (
        <>
          {episodes.map((episode) => {
            return (
              <div className={`pageContainer ${s.border}`} key={location.id} >
                <p>Эпизод: <b>{episode.episode}</b></p>
                <p>Название эпизода: <b>{episode.name}</b></p>
                <p>Дата выхода эпизода в эфир: <b>{episode.air_date}</b></p>
                <p>Список персонажей, которые были замечены в эпизоде: <b>{episode.characters?.length}</b></p>
              </div>
            )
          })

          }
        </>
      )}
    </div>
  )
}