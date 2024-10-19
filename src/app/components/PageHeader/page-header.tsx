import Image from "next/image";
import heroImage from "../../assets/hero.jpg";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div>
      <div className="flex flex-col justify-center relative h-[60vh]">
        {/* hero Image */}
        <Image
          src={heroImage}
          width={1920}
          height={500}
          className="h-[60vh] w-full absolute top-0 left-0 z-[0]"
          alt="hero image"
        />
        {/* hero Image End */}
        <div className="z-[1]">
          <div className="h-[60vh] flex justify-center">
            <div className="bg-[#000000c4] w-full flex flex-col justify-center items-center p-[16px] px-[50px] ">
              <div className="text-[#b49383] font-bold text-[45px] cursive-font">
                Delicious
              </div>
              <div className="text-white text-[30px]">{title}</div>
              {/* <div className="text-[white] text-center mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                voluptas explicabo illo dolores voluptatem ducimus obcaecati
                ipsam magnam unde vel? Facere dicta rerum tenetur pariatur
                voluptate veritatis ea quo suscipit Vero, aspernatur nemo!
              </div>z */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
