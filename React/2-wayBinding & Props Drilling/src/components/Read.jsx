const Read = (props) => {
    const users = props.user;

    const renderUser = users.map((user,index)=>{
        return <li key={index}>{user.name}</li>;
    });

  return (
    <>
    <hr />
    <h1>Users Data</h1>
    <ol>{renderUser}</ol>
    </>
  );
};

export default Read;