import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full  flex-col items-center justify-between sm:items-start">
        <Navbar />
        <h1>amirul</h1>
      </main>
    </div>
  );
}
