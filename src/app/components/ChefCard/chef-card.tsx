import Image, { StaticImageData } from "next/image";
import PrimaryButton from "../PrimaryButton/primary-button";

interface ChefCardProps {
  image: StaticImageData;
  name: string;
  designation: string;
}

export default function ChefCard({ image, name, designation }: ChefCardProps) {
  return (
    <div className="flex flex-col gap-[5px] items-center">
      <Image
        src={image}
        width={260}
        height={350}
        className="w-[260px] h-[350px]"
        alt="chef1"
      />
      <div className="mt-[20px]">{name}</div>
      <div className="text-[13px] text-[var(--placeholder-color)]">
        {designation}
      </div>
      <div className="mt-[10px]">
        <PrimaryButton buttonLabel="SEE MORE" />
      </div>
    </div>
  );
}
