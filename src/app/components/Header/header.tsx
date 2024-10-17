import ReservationButton from "../ReservationButton/reservation-button";

export default function Header() {
  return (
    <div className="z-[1] bg-[#000000cc] h-[110px] flex items-center">
      <div className="outer-container text-white ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[18px] items-center justify-center">
            <div className="font-bold cursive-font text-[30px]">Delicious</div>
            <div>Hungry? Try Delicious</div>
          </div>
          <div className="flex gap-[20px] text-[14px] font-semibold">
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              HOME
            </div>
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              ABOUT US
            </div>
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              MENU
            </div>
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              DELIVERY
            </div>
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              BLOG
            </div>
            <div className="cursor-pointer hover:text-[brown] transition-colors">
              CONTACT
            </div>
          </div>
          <ReservationButton />
        </div>
      </div>
    </div>
  );
}
