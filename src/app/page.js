// import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import strawberry from '../../public/strawberry-cake.jpg'

export default function Home() {
  return (
    <main className="container">
      <h1>API-ROUTES WITH STATIC-DATA(USERS)</h1>
      <Link href="/userslist">GET API with static-data </Link><br/>
      <Link href="/adduser">POST API with static-data </Link><br/>
      <Link href="/userslist">PUT/DELETE API with static-data </Link><br/>
      <h1>API-ROUTES WITH MONGOBD-DATA(ProductS)</h1>
      <Link href="/productslist">GET/PUT/DELETE API with mongodb </Link><br/>
      <Link href="/addproduct">POST API with mongodb </Link><br/>
      <h2>ImageUpload without any libraries</h2>
      <Link href="/imageupload">Imageupload</Link><br/>
      <h3>uploaded image</h3>
      <Image src={strawberry} alt="strawberry-img"/>
      {/* <img src={'/strawberry-cake.jpg'}/> */}
    </main>
  );
}
