import TrendingApps from "../shared/TrendingApps";
import Banner from "./Banner/Banner";
import Stats from "./Stats/Stats";

function HomePage() {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps from={"homePage"} />
    </>
  );
}

export default HomePage;
