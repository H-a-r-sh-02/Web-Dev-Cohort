import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const { id, image, title, description, instr, category } = props.recipe
  return (
    <Link to={`/recipes/details/${id}`} key={id} className="hover:scale-105 duration-100 block w-[20vw] rounded-3xl  overflow-hidden shadow bg-green-700/20 backdrop-blur-md px-4 py-4" >
    <img className="object-cover w-30 h-30 mx-auto rounded-full" src={image} alt="" />
    <h2 className="mt-4 text-2xl font-semibold ">{title}</h2>
    <p className="mt-2 text-lg font-semibold break-words whitespace-normal">{description.slice(0,20)}...{" "}
    <small className="text-blue-400">more</small>
    </p>
    <p className="text-lg font-semibold break-words whitespace-normal">{instr}...</p>
    <h2 className="mt-2 text-xl font-medium">{category}</h2>
    </Link>
  )
}

export default RecipeCard

