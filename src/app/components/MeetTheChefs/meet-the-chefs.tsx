import ChefCard from "../ChefCard/chef-card";
import chef1 from "../../assets/chef_1.jpg";
import chef2 from "../../assets/chef_2.jpg";
import chef3 from "../../assets/chef_3.jpg";
import chef4 from "../../assets/chef_4.jpg";

export default function MeetTheChefs() {
  return (
    <div className="outer-container flex flex-col">
      <div className="text-[36px] text-[var(--gold-color)] cursive-font">
        Something New
      </div>
      <div className="text-[25px]">Meet The Chefs</div>
      <div className="flex justify-between gap-[12px] pt-[20px] text-[13px] text-[var(--placeholder-color)]">
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio
          reprehenderit optio. Voluptas aperiam, sunt optio, itaque sequi cumque
          ad magnam eligendi earum ipsa odio ducimus laboriosam vero quibusdam
          atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt, sequi.
        </div>
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio
          reprehenderit optio. Voluptas aperiam, sunt optio, itaque sequi cumque
          ad magnam eligendi earum ipsa odio ducimus laboriosam vero quibusdam
          atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Incidunt, sequi.
        </div>
      </div>
      <div className="flex justify-between gap-[20px] mt-[100px]">
        <ChefCard image={chef1} designation="Top Chef" name="Anna Doe" />
        <ChefCard image={chef2} designation="Shushi Chef" name="Anna Doe" />
        <ChefCard image={chef3} designation="Chicken Chef" name="Anna Doe" />
        <ChefCard image={chef4} designation="Pork Chef" name="Anna Doe" />
      </div>
    </div>
  );
}
