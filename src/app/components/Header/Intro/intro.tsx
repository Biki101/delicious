import Image from "next/image";
import introChef from "../../../assets/intro-chef.png";
import chefWithDish from "../../../assets/chef-with-dish-intro.jpg";

export default function Intro() {
  return (
    <div className="outer-container">
      <div className="relative">
        <div className="absolute top-[200px] w-[600px] bg-white border-[2px] border-[var(--gold-color)] p-[50px] left-0">
          <div className="text-[36px] text-[var(--gold-color)] cursive-font">
            Something New
          </div>
          <div className="text-[25px]">An Extra Ordinary Experience</div>
          <div className="mt-[10px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            labore quidem, officiis eos animi iure, atque sunt fugiat magni. et
            sit eveniet, ab porro commodi perferendis non!
          </div>
        </div>
      </div>
      <div className="h-[700px] flex gap-[30px] justify-end items-center">
        <Image
          src={introChef}
          width={350}
          height={560}
          className="w-[350px] h-[560px]"
          alt="intro-chef"
        />
        <Image
          src={chefWithDish}
          width={350}
          height={560}
          alt="intro-chef"
          className="w-[350px] h-[560px]"
        />
      </div>
    </div>
  );
}
