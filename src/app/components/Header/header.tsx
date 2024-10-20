"use client";
import Link from "next/link";
import ReservationButton from "../ReservationButton/reservation-button";
import { useState } from "react";

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="z-[100] bg-[#000] h-[110px] flex items-center sticky top-0 left-0">
      <div className="xl:w-[1280px] xl:m-auto w-full text-white relative">
        {/* small device view */}
        <div
          className={`${
            showMobileNav ? "flex" : "hidden"
          } absolute lg:hidden bg-white top-[-18px] w-[300px] right-[0px] flex flex-col gap-[12px] text-black p-[50px] border-[1px] border-[var(--gold-color)] slide-left`}
        >
          <div onClick={toggleMobileNav} className="self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
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
        {/* small device view end */}
        <div className="xl:mx-0 mx-[20px] flex justify-between items-center">
          <div className="flex flex-col text-[18px] items-center justify-center">
            <div className="font-bold cursive-font text-[30px]">Delicious</div>
            <div>Hungry? Try Delicious</div>
          </div>
          <div onClick={() => toggleMobileNav()} className="block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 0 24 24"
              width="30"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                fill="white"
              />
            </svg>
          </div>
          <div className="hidden gap-[20px] text-[14px] font-semibold lg:flex">
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
          <div className="lg:block hidden">
            <ReservationButton />
          </div>
        </div>
      </div>
    </div>
  );
}
