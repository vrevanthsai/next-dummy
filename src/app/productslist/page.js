import DeleteProduct from "@/lib/DeleteProduct";
// import axios from "axios";
import Link from "next/link";

async function getProducts() {
  try {
    let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {cache : "no-store"}
    ); // {cache : "no-cache"} - { next: {revalidate: 3,},}
    data = await data.json();
    // let { data } = await axios.get("http://localhost:3000/api/products")
    if (data.success) {
      return data.result;
    } else {
      alert(data.result);
      return;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

// server comp
const ProductsList = async () => {
  let products = await getProducts();

  return (
    <div className="container">
      <h1>ProductsList with GET-API</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">price</th>
            <th scope="col">company</th>
            <th scope="col">color</th>
            <th scope="col">category</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((p, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.company}</td>
                <td>{p.color}</td>
                <td>{p.category}</td>
                <td>
                  <Link href={`/productslist/${p._id}`}>Update-Product</Link>{" "}
                </td>
                <td>
                  <DeleteProduct pid={p._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link href={"/"}>Go Home</Link>
    </div>
  );
};

export default ProductsList;
