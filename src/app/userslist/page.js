import DeleteUser from "@/componets/DeleteUser";
// import axios from "axios";
import Link from "next/link";

async function getUsers() {
  try {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`,{cache : "no-store"});
    data = await data.json();
    // let { data } = await axios.get("http://localhost:3000/api/users")
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const UsersList = async () => {
  const users = await getUsers();
  // console.log(users)

  return (
    <div>
      <h1>Users List from API</h1>
      {
        users.map((u, i) => {
          return (
            <div key={i}>
              <Link href={`/userslist/${u.id}`}>{u.name}</Link>
              <span>
                {" "}
                <Link href={`/userslist/${u.id}/update`}>Edit</Link>{" "}
              </span>
              <DeleteUser id={u.id} />
            </div>
          );
        })
        // JSON.stringify(users,null,4)
      }
    </div>
  );
};

export default UsersList;
