import Image from "next/image";
import Header from "./components/Header/header";
import heroImage from "./assets/hero.jpg";
import WelcomeMessage from "./components/Header/WelcomeMessahe/welcome-message";
import Intro from "./components/Header/Intro/intro";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-between relative h-[100vh]">
        {/* hero Image */}
        <Image
          src={heroImage}
          width={1920}
          height={180}
          className="h-[100vh] w-full absolute top-0 left-0 z-[0]"
          alt="hero image"
        />
        {/* hero Image End */}
        <Header />
        <WelcomeMessage />
        <div className="z-[1] slide-top mx-auto">
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
      <Intro />
    </div>
  );
}

// const divStyle = {
//   backgroundImage: url('/../app/assets/hero.jpg'),
//   backgroundSize: "cover", // or 'contain' based on your needs
//   backgroundPosition: "center",
//   height: "100vh", // Set the height you want
//   width: "100%", // Set the width you want
// };
