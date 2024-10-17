import Image from "next/image";
import reservation from ".././../assets/reservation.jpg";
import ReservationButton from "../ReservationButton/reservation-button";

export default function Reservation() {
  return (
    <div className="my-[50px]">
      <div className="h-[470px] flex justify-center items-center relative">
        <Image
          src={reservation}
          width={1280}
          height={800}
          className="h-[470px] w-full absolute top-0 left-0 z-[-1]"
          alt="reservation"
        />
        <div className="bg-[#00000098] w-[400px] h-[200px] flex flex-col justify-center items-center">
          <div className="z-[1] cursive-font text-[var(--gold-color)] text-[22px] w-[250px] text-center">
            5 Stars
          </div>
          <div className="text-white text-[20px] mb-[20px]">
            {" "}
            Make A Reservation
          </div>
          <ReservationButton />
        </div>
      </div>
    </div>
  );
}
