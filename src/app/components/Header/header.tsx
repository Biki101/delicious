export default function Header() {
  return (
    <div className="z-[1] bg-[#000000cc] h-[110px] flex items-center">
      <div className="outer-container text-white ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[18px] items-center justify-center">
            <div>Delicious</div>
            <div>Hungry? Try Delicious</div>
          </div>
          <div className="flex gap-[20px] ">
            <div>HOME</div>
            <div>ABOUT US</div>
            <div>MENU</div>
            <div>DELIVERY</div>
            <div>BLOG</div>
            <div>CONTACT</div>
          </div>
          <div>Reservations: +977 901010101010</div>
        </div>
      </div>
    </div>
  );
}
