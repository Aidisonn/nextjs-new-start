import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import supabase from "@/supabase/supabaseClient";

export default function Home() {
  console.log(supabase)
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Go to Users</Link>
      <ProductCard />
    </main>
  );
}
