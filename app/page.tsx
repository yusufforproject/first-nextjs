import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1>FIRST NEXT-JS-APP</h1>
    <br />
    <Link href={"/posts"}>Go to posts page</Link>
    <br />
    <Link href={"/albums"}>Go to albums page</Link>
    </>
  );
}
