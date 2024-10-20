import Image from "next/image";
import todaySpecial from "../../assets/today-special.jpg";
import PrimaryButton from "../PrimaryButton/primary-button";
import FiveStars from "../FiveStars/five-stars";

export default function TodaySpecial() {
  return (
    <div className="w-full xl:w-[1280px] xl:m-auto h-[730px] flex justify-start items-center relative">
      <Image
        src={todaySpecial}
        height={525}
        width={800}
        className="h-[525px] w-[800px]"
        alt="today-special"
      />
      <div className="absolute top-[50px] md:top-[200px] w-[340px] xsm:w-[450px] sm:w-[600px] bg-white border-[2px] border-[var(--gold-color)] p-[50px] right-0">
        <div className="text-[25px] sm:text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[18px] sm:text-[25px]">Todays Special</div>
        <FiveStars />
        <div className="text-[11px] sm:text-[16px] mt-[10px] flex justify-between">
          <div>Katti Roll Myoneese Sprinkles Perry Sauce</div>
          <div>$ 20</div>
        </div>
        <div className=" text-[11px] sm:text-[16px] md:text-[13px] text-[var(--placeholder-color)]">
          Chicken / Buff / Black Pepper / Veggies
        </div>
        <div className="mt-[20px]">
          <PrimaryButton buttonLabel="Order Now" />
        </div>
      </div>
    </div>
  );
}
