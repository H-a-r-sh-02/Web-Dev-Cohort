import {useState} from "react";

const Create = (props) => {
  // console.log(props)
    const[fullname, setfullName] = useState("");
    const[age, setage] = useState(18);

        const submitHandler = (e)=>{
            e.preventDefault();
            const newUser = {fullname, age};
            console.log(newUser);
        };

  return (
    <>
    <h1>Create User</h1> 
    <form onSubmit={submitHandler}>
      <input
      onChange={(e)=> setfullName(e.target.value)}
      value={fullname}
       type="text"
       placeholder="enter userName"
       />
       <input
       onChange={(e)=> setage(e.target.value)}
       value={age}
        type="number"
        placeholder="enter age"
       />
       <button>Submit</button>
    </form>
    </>
  )
}

export default Create;