import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  date: string;
  image: StaticImageData;
  title: string;
  author: string;
  category: string;
  comments: string;
  details: string;
}

export default function BlogCard({
  date,
  image,
  title,
  author,
  category,
  comments,
  details,
}: BlogCardProps) {
  return (
    <div className="w-full relative flex flex-col gap-[12px]">
      <div className="absolute top-[-10px] left-[30px] bg-white text-[13px] border-[1px] border-[var(--gold-color)] px-[8px] py-[4px]">
        {date}
      </div>
      <Image
        src={image}
        width={300}
        height={200}
        className="w-full h-auto"
        alt="blog image"
      />
      <div className="text-[25px]">{title}</div>
      <div className="bg-[var(--gold-color)] w-fit text-white px-[8px] py-[4px] text-[12px]">
        by {author} | in {category} | {comments} comments
      </div>
      <div className="text-[13px] text-[var(--placeholder-color)]">
        {details}
      </div>
    </div>
  );
}
