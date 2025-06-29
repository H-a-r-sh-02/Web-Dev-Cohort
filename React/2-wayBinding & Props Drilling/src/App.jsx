import { useState } from "react";
import Create from "./components/Create"
import Read from "./components/Read"

const App = () => {

 const [userName,setUsername] = useState([
  {name: "Harsh", age: 21},
  {name: "Dhanesh", age: 24}
 ]);

  return (
    <>
     <Create />
     <Read user={userName} setuser={setUsername} />
    </>
  )
}

export default App
