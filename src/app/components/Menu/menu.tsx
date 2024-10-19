import FiveStars from "../FiveStars/five-stars";
import MenuSection from "../MenuSection/menu-section";

export default function Menu() {
  return (
    <div className="outer-container flex flex-col gap-[40px]">
      {/* Menu Header */}
      <div className="h-[150px] bg-black w-full p-[22px]">
        <div className="border-[2px] border-[var(--gold-color)] w-full h-full flex flex-col items-center justify-center ">
          <div className="cursive-font text-[var(--gold-color)] text-[22px] bg-black w-[250px] text-center">
            5 Stars
          </div>
          <div className="text-white text-[30px] font-bold">The Menu</div>
          <div className="mt-[20px] bg-black w-[150px] flex justify-center">
            <FiveStars />
          </div>
        </div>
      </div>
      {/* Menu Header End*/}
      <MenuSection />
    </div>
  );
}
