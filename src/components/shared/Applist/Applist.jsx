"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rating from "@/assets/img/icon-ratings.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function Applist({ from }) {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setApps(data);
    };

    fetchData();
  }, []);

  return (
    <section>
      {" "}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {apps.slice(0, from === "homePage" ? 8 : apps.length).map((app) => (
          <div
            key={app.id}
            className="group flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={app.image}
                alt={app.title}
                width={200}
                height={200}
                className="object-contain p-2"
              />
            </div>

            {/* Content Section */}
            <div className="w-full mt-4 space-y-2 text-center">
              <h3 className="font-semibold text-gray-800 truncate text-sm md:text-base">
                {app.title}
              </h3>

              <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5 text-green-600 font-medium">
                  <FontAwesomeIcon icon={faUser} className="w-3.5 h-3.5" />
                  <span className="text-xs">{app.downloads}</span>
                </div>

                <div className="flex items-center gap-1.5 text-gray-600">
                  <Image src={rating} alt="rating" width={14} height={14} />
                  <span className="text-xs font-semibold">{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/apps"}>
        <button
          className={` btn ${from === "homePage" ? "block " : "hidden"} bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl text-white font-medium  mx-auto`}
        >
          {from === "homePage" ? "Show All  " : "less"}
        </button>
      </Link>
    </section>
  );
}

export default Applist;
