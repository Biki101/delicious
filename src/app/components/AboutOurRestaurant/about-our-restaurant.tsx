import Image from "next/image";
import restaurant from "../../assets/about-restaurant.jpg";

export default function AboutOurRestaurant() {
  return (
    <div className="w-full xl:w-[1280px] m-auto py-[50px] pt-[100px] px-[20px] xl:px-[0px]">
      <div className="flex flex-col items-center">
        <div className="text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[25px]">About Our Restaurant</div>
      </div>
      <div className="flex sm:flex-row flex-col gap-[20px] items-center justify-between mt-[20px]">
        <div className="flex flex-col gap-[20px] w-[350px] sm:w-full">
          <div className="text-[14px] text-[#000]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            maxime numquam? Accusantium alias hic minima inventore impedit et
            eaque exercitationem architecto perferendis eveniet atque assumenda
            quo, sit temporibus, ipsam obcaecati molestiae sint distinctio
            ratione veritatis quia corrupti unde non eum! Omnis quaerat tempora
            impedit repellat molestias velit. Accusantium, architecto
            repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam harum iusto enim! Perferendis praesentium ea asperiores, aut
            eveniet quod eum. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Sint voluptatem reiciendis rerum officiis quae?
            Consequuntur, suscipit maiores. Perferendis dolorem quo ea animi
            veniam recusandae quidem ipsa! Alias nulla doloremque a! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ducimus, asperiores
            maiores. Magni optio nemo sit omnis cumque velit non facilis
            explicabo eius unde adipisci, maiores possimus dolorum corrupti esse
            ut autem ipsum itaque illum voluptas assumenda perferendis dolore
            incidunt reprehenderit? Vel, omnis. Odit animi reiciendis eos sequi
            quod quibusdam veritatis.
          </div>
          <div className="text-[13px]  text-[#000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla
            molestiae soluta provident aliquid ducimus maxime blanditiis, hic,
            cum quo error, recusandae dignissimos magnam sapiente pariatur
            accusamus dicta quia? Aliquid.
          </div>
        </div>
        <Image
          src={restaurant}
          width={300}
          height={500}
          className="w-[300px] h-[500px]"
          alt="restaurant"
        />
      </div>
    </div>
  );
}
