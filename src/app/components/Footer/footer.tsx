import Reservation from "../Reservation/reservations";

export default function Footer() {
  return (
    <div>
      {/* <Reservation /> */}
      <div className="bg-[#131212]">
        <div className="w-full xl:w-[1280px] m-auto py-[50px] flex  flex-col lg:flex-row justify-between items-center gap-[50px]">
          <div className="flex flex-col text-[18px] items-center justify-center text-white">
            <div className="font-bold cursive-font text-[30px]">Delicious</div>
            <div className="text-[13px] w-[200px] flex justify-center">
              Hungry? Try Delicious
            </div>
            <div className="flex justify-center items-center gap-[5px] text-[11px]">
              {/* copyright icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // enable-background="new 0 0 24 24"
                height="15"
                viewBox="0 0 24 24"
                width="15"
              >
                <g>
                  <rect fill="none" height="24" width="24" x="0" />
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="M11.88,9.14c1.28,0.06,1.61,1.15,1.63,1.66h1.79c-0.08-1.98-1.49-3.19-3.45-3.19C9.64,7.61,8,9,8,12.14 c0,1.94,0.93,4.24,3.84,4.24c2.22,0,3.41-1.65,3.44-2.95h-1.79c-0.03,0.59-0.45,1.38-1.63,1.44C10.55,14.83,10,13.81,10,12.14 C10,9.25,11.28,9.16,11.88,9.14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              {/* copyright icon end*/}
              <div>All Rights Reserved. 2024</div>
            </div>
          </div>
          <div className="text-[13px] text-[var(--placeholder-color)]  min-w-[300px] mx-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam
            similique aperiam, ex provident dolores deleniti mollitia nemo,
            laborum autem incidunt laudantium perferendis error facilis
            architecto, ea et. Qui, id.
          </div>
          <div className="flex flex-col gap-[5px] min-w-[240px] mr-[20px] xl:mr-[0]">
            <div className="flex text-white text-[13px]  justify-between items-center gap-[5px]">
              <div className="bg-[var(--gold-color)] px-[8px] w-[70px] text-center">
                Address
              </div>
              <div>245 Los Santos, CA</div>
            </div>
            <div className="flex text-white text-[13px]  justify-between items-center gap-[5px]">
              <div className="bg-[var(--gold-color)] px-[8px] w-[70px] text-center">
                Contact
              </div>
              <div>+977 901010101010</div>
            </div>
            <div className="flex text-white text-[13px]  justify-between items-center gap-[5px]">
              <div className="bg-[var(--gold-color)] px-[8px] w-[70px] text-center">
                Mail
              </div>
              <div>your@mail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
