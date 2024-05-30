async function getUser(uid) {
    let data = await fetch(`http://localhost:3000/api/users/${uid}`)
    data = await data.json();
    return data.result
}

const UserDetails = async ({params}) => {
    // console.log(params.userid)
    const user = await getUser(params.userid)  
    // console.log(user)
  return (
    <div>
        <h1>UserDetails single user api data</h1>
        <h4>Name: {user.name} </h4>
        <h4>age: {user.age} </h4>
        <h4>email: {user.email} </h4>
        <h4>id: {user.id} </h4>
    </div>
  )
}

export default UserDetails