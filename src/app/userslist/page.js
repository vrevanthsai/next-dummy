import DeleteUser from "@/componets/DeleteUser";
import Link from "next/link";

async function getUsers() {
    let data = await fetch('http://localhost:3000/api/users',{cache:"no-cache"})
    data = await data.json();
    return data
}

const UsersList = async () => {
    const users = await getUsers();
    // console.log(users)

  return (
    <div>
        <h1>Users List from API</h1>
        {
            users.map((u,i)=>{
                return <div key={i}>
                     <Link href={`/userslist/${u.id}`}>{u.name}</Link>
                     <span>   <Link href={`/userslist/${u.id}/update`}>Edit</Link>  </span>
                     <DeleteUser id={u.id}/> 
                </div>
            })
            // JSON.stringify(users,null,4)
        }
    </div>
  )
}

export default UsersList