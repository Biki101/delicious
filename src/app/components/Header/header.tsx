import Link from "next/link";
import ReservationButton from "../ReservationButton/reservation-button";

export default function Header() {
  return (
    <div className="z-[100] bg-[#000] h-[110px] flex items-center sticky top-0 left-0">
      <div className="outer-container text-white ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[18px] items-center justify-center">
            <div className="font-bold cursive-font text-[30px]">Delicious</div>
            <div>Hungry? Try Delicious</div>
          </div>
          <div className="flex gap-[20px] text-[14px] font-semibold">
            <Link
              href="/"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/menu"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              MENU
            </Link>
            {/* <Link
              href="about-us"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              DELIVERY
            </Link> */}
            <Link
              href="/blog"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer hover:text-[brown] transition-colors"
            >
              CONTACT
            </Link>
          </div>
          <ReservationButton />
        </div>
      </div>
    </div>
  );
}
