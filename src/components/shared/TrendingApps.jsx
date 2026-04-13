import { Suspense } from "react";
import Applist from "./Applist/Applist";

function TrendingApps({ from }) {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center">
          {from === "homepage" ? "Trending Apps" : "Our All Applications"}
        </h2>
        <p className="text-center text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* applist */}
      <Suspense
        fallback={
          <h2 className="text-3xl font-medium text-center text-black my-9">
            Loading...
          </h2>
        }
      >
        <Applist from={from} />
      </Suspense>
    </section>
  );
}

export default TrendingApps;
