import HomePage from "@/components/navbar/HomePage/HomePage";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full  flex-col gap-5  sm:items-start">
        <Navbar />
        <HomePage />
      </main>
    </div>
  );
}
