import { HomePage } from "./pages/HomePage/HomePage.jsx"
import {Character} from "./pages/Character/Character.jsx"
import {CharacterPage} from "./pages/CharacterPage/CharacterPage.jsx"
import {LocationPage} from "./pages/LocationPage/LocationPage.jsx"
import {EpisodePage} from "./pages/EpisodePage/EpisodePage.jsx"
import {Header} from "./pages/Header/Header.jsx"
import { Route, Routes} from 'react-router'


function App() {
  return (
    <div>
      <Header />
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<Character />}></Route>
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
     </Routes>
    </div>
  )
}
export default App


