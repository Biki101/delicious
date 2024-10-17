import Image from "next/image";
import todaySpecial from "../../assets/today-special.jpg";
import PrimaryButton from "../PrimaryButton/primary-button";

export default function TodaySpecial() {
  return (
    <div className="outer-container h-[730px] flex justify-start items-center relative">
      <Image
        src={todaySpecial}
        height={525}
        width={800}
        className="h-[525px] w-[800px]"
        alt="today-special"
      />
      <div className="absolute top-[200px] w-[600px] bg-white border-[2px] border-[var(--gold-color)] p-[50px] right-0">
        <div className="text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[25px]">Todays Special</div>
        {/* rating 5 star  */}
        <div className="flex gap-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#af9608"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#af9608"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#af9608"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#af9608"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill="#af9608"
            />
          </svg>
        </div>
        {/* rating 5 star end */}
        <div className="mt-[10px] flex justify-between">
          <div>Katti Roll Myoneese Sprinkles Perry Sauce</div>
          <div>$ 20</div>
        </div>
        <div className="text-[13px] text-[var(--placeholder-color)]">
          Chicken / Buff / Black Pepper / Veggies
        </div>
        <div className="mt-[20px]">
          <PrimaryButton buttonLabel="Order Now" />
        </div>
      </div>
    </div>
  );
}
