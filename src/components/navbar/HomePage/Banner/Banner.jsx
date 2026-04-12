import FontAwesomeConfig from "@/app/fontawesome";
import playstoreImg from "@/assets/img/playstore.png";
import appstoreImg from "@/assets/img/appstore.png";
import bannerImg from "@/assets/img/hero.png";
import Image from "next/image";
function Banner() {
  return (
    <section className=" mx-auto mt-10 space-y-7 text-[#001931] flex flex-col items-center justify-center ">
      {/* top part */}
      <div>
        <div>
          {/* need to make a gradient color by this two color : 632EE3, 9F62F2  */}
          <h1
            className=" text-4xl flex
           flex-col gap-4 font-black md:text-6xl text-center "
          >
            <span>We Build</span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
              Productive Apps
            </span>
          </h1>

          <p className=" text-base text-[#627382] text-center mt-5 max-w-2xl mx-auto">
            At PH AppStore, we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting.Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        {/* need to make a div .inside it make two button with playstore and appstore logo */}
        <div className="flex gap-4 mt-5 items-center justify-center ">
          <button className="btn btn-soft ">
            <Image src={playstoreImg} alt="Play Store" className="w-5 h-5" />
            Play Store
          </button>
          <button className="btn btn-primary">
            <Image src={appstoreImg} alt="App Store" className="w-5 h-5" />
            App Store
          </button>
        </div>
      </div>
      {/* bottom part */}
      <div>
        <Image src={bannerImg} alt="Banner Image" width={600} height={350} />
      </div>
    </section>
  );
}

export default Banner;
