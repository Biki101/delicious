import Image from "next/image";
import Header from "./components/Header/header";
import heroImage from "./assets/hero.jpg";
import banner from "./assets/banner.jpg";
import WelcomeMessage from "./components/WelcomeMessage/welcome-message";
import Intro from "./components/Intro/intro";
import TodaySpecial from "./components/TodaySpecial/today-special";
import Menu from "./components/Menu/menu";
import Footer from "./components/Footer/footer";
import introChef from "./assets/intro-chef.png";
import chefWithDish from "./assets/chef-with-dish-intro.jpg";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center relative  xsm:h-[50vh] lg:h-[100vh]">
        {/* hero Image */}
        <Image
          src={heroImage}
          width={1920}
          height={180}
          className="h-[50vh] lg:h-[100vh] w-full absolute top-0 left-0 z-[0]"
          alt="hero image"
        />
        {/* hero Image End */}
        <WelcomeMessage />
        <div className="z-[1] slide-top mx-auto mt-[150px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 0 24 24"
            width="30"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Intro image1={introChef} image2={chefWithDish} />
      {/* banner */}
      <div className="relative mt-[150px] md:mt-0">
        <div className="bg-[#00000085] absolute top-0 left-0 h-[400px] w-full flex justify-center items-center">
          <div className="text-white text-[30px] sm:text-[40px] font-extralight cursive-font">
            Food For the Soul
          </div>
        </div>
        <Image
          src={banner}
          width={1280}
          height={500}
          alt="banner"
          className="h-[400px] w-full"
        />
      </div>
      {/* banner end*/}
      <TodaySpecial />
      <Menu />
      <Footer />
    </div>
  );
}
