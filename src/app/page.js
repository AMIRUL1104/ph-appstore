import HomePage from "@/components/HomePage/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full  flex-col  sm:items-start">
        <HomePage />
      </main>
    </div>
  );
}
