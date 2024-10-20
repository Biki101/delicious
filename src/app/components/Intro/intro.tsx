import Image, { StaticImageData } from "next/image";

interface PrimaryButtonProps {
  image1: StaticImageData;
  image2: StaticImageData;
}

export default function Intro({ image1, image2 }: PrimaryButtonProps) {
  return (
    <div className="w-full xl:w-[1280px] my-[100px] sm:my-[20px] md:my-[0px] m-auto">
      <div className="relative">
        <div className="absolute top-[350px] md:top-[200px] w-[350px] sm:w-[600px] bg-white border-[2px] border-[var(--gold-color)] p-[50px] left-0">
          <div className="text-[36px] text-[var(--gold-color)] cursive-font">
            Something New
          </div>
          <div className="text-[18px] md:text-[25px]">
            An Extra Ordinary Experience
          </div>
          <div className="mt-[10px] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            labore quidem, officiis eos animi iure, atque sunt fugiat magni. et
            sit eveniet, ab porro commodi perferendis non!
          </div>
        </div>
      </div>
      <div className="h-[700px] flex flex-wrap gap-[30px] justify-end items-center ">
        <Image
          src={image1}
          width={350}
          height={560}
          className="w-[350px] h-[400px] md:h-[560px]"
          alt="intro-chef"
        />
        <Image
          src={image2}
          width={350}
          height={560}
          alt="intro-chef"
          className="w-[350px] h-[400px] md:h-[560px]"
        />
      </div>
    </div>
  );
}
