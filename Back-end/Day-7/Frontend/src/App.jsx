import FacialExpression from "./components/FacialExpression"
import Songs from "./components/Songs"


const App = () => {
  return (
    <div className=" w-full h-[100vh] p-[2rem] bg-slate-800">
      <FacialExpression />
      <Songs />
    </div>
  )
}

export default App