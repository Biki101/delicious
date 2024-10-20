import Image from "next/image";
import testimonial from "../..//assets/testimonials.jpg";

export default function Testimonials() {
  return (
    <div className="h-[300px] xsm:h-auto w-full relative mt-[100px]">
      <Image
        src={testimonial}
        height={550}
        width={1280}
        alt="testimonial"
        className="absolute top-0 left-0 z-[-1] w-full h-[300px] xsm:h-auto"
      />
      <div className=" flex flex-col justify-center items-center h-[200px] pt-[20px] md:pt-[0px] md:h-[300px] lg:h-[550px] gap-[12px] z-[2]">
        <div className="text-[#b49383] font-bold text-[18px] md:text-[25px] cursive-font">
          What They Say
        </div>
        <div className="text-[25px] md:text-[30px]">Testimonials</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6 17h3l2-4V7H5v6h3z" fill="#af9608" />
          <path d="M14 17h3l2-4V7h-6v6h3z" fill="#af9608" />
        </svg>
        <div className="text-[11px] md:text-[13px] text-[var(--placeholder-color)] px-[20px] w-full xsm:w-[500px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
          veniam minus eum. Vero eveniet dolorem, obcaecati eum eos, veniam
          laborum quia et ratione, aperiam praesentium. Voluptatibus quaerat eum
          sed.
        </div>
        <div className="flex gap-[6px]">
          John Hagger,{" "}
          <div className="text-[var(--placeholder-color)]">Client</div>
        </div>
      </div>
    </div>
  );
}
