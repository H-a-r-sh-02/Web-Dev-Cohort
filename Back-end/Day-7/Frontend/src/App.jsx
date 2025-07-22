import { useState } from "react"
import FacialExpression from "./components/FacialExpression"
import Songs from "./components/Songs"


const App = () => {
    const [songs, setsongs] = useState([
  ]);

  return (
    <div className="min-h-screen w-full px-4 py-4 bg-linear-to-t from-black to-green-600">
      <FacialExpression setsongs={setsongs} />
      <Songs songs={songs} />
    </div>
  )
}

export default App