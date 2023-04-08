import extractedData from "./data.json"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import Home from "./pages/Home"
import { useState } from "react"
function App() {
  const [data, setData] = useState(extractedData)
  // console.log(data.destinations)
 data.crew.map((members)=>{
    // console.log(members.name)
  })
  return (
    <div className="text-white h-[100dvh] w-[100%] overflow-x-hidden">
      <Router>
      <NavBar />
      <Routes>
          < Route path="/" element={<Home/>}/>
          < Route path="/destination" element={<Destination data={data.destinations}/>}/>
          < Route path="/crew" element={<Crew data={data.crew}/>}/>
          < Route path="/technology" element={<Technology data={data.technology}/>}/>
          
      </Routes>
      </Router>
    </div>
  )
}

export default App
