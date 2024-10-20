import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import PageHeader from "../components/PageHeader/page-header";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <PageHeader title="Contact" />
      <div className="my-[50px] flex flex-wrap justify-center w-full px-[20px] xl:px-[0px] xl:w-[1280px] xl:m-auto pt-[20px]">
        <div className="flex justify-center flex-wrap">
          <div className="w-full xsm:w-[460px]">
            <div>
              <div>Contact Info</div>
              <div className=" mt-[12px] text-[13px] text-[var(--placeholder-color)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                vero repellendus recusandae voluptate voluptas soluta assumenda
                quod aliquid facilis excepturi. Provident facilis tenetur
                similique libero facere officia error ratione excepturi?
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-[20px]">
              <div className="font-bold cursive-font text-[30px]">
                Delicious
              </div>
              <div className="text-[13px] w-[200px] flex justify-center">
                Hungry? Try Delicious
              </div>
            </div>
          </div>
          <div className="w-[400px] p-[50px] h-[300px]  flex flex-col gap-[16px] justify-between items-between text-[13px]">
            <div className="flex flex-col gap-[18px]">
              <div className=" flex justify-between gap-[12px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>Address</div>
                </div>
                <div className="text-[var(--placeholder-color)]">
                  6542 London Chicago, CA6541
                </div>
              </div>
              <div className=" flex justify-between gap-[12px]">
                <div className="flex items-center gap-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <div>Phone</div>
                </div>
                <div className="text-[var(--placeholder-color)]">
                  +977 901010101010
                </div>
              </div>
              <div className=" flex justify-between gap-[12px]">
                <div className="flex gap-[6px] items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <div>Email</div>
                </div>
                <div className="text-[var(--placeholder-color)]">
                  yourmail@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-location flex justify-center border-[1px] border-[var(--gold-color)]">
          <div className="gmap_canvas">
            <iframe
              width="360"
              height="400"
              title="our-location"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bhaktapur Nepal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
