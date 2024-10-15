import Image from "next/image";
import Header from "./components/Header/header";
import heroImage from "./assets/hero.jpg";

export default function Home() {
  return (
    <div className="flex flex-col relative">
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
