import Image, { StaticImageData } from "next/image";
import PrimaryButton from "../PrimaryButton/primary-button";
import FiveStars from "../FiveStars/five-stars";

interface SignatureDishCardProps {
  title: string;
  price: string;
  category: string;
  image: StaticImageData;
}

export default function SignatureDishesCard({
  title,
  price,
  category,
  image,
}: SignatureDishCardProps) {
  return (
    <div className="w-full">
      <div className="w-1/2 flex justify-between gap-[20px] items-center">
        <div className="">
          <FiveStars />
          <div className="mt-[10px] flex justify-between w-[350px]">
            <div>{title}</div>
            <div>$ {price}</div>
          </div>
          <div className="text-[13px] text-[var(--placeholder-color)]">
            {category}
          </div>
          <div className="mt-[20px]">
            <PrimaryButton buttonLabel="Order Now" />
          </div>
        </div>
        <Image
          src={image}
          alt="dish-image"
          width={600}
          height={600}
          className="w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
}
