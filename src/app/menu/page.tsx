import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import PageHeader from "../components/PageHeader/page-header";
import MenuSection from "../components/MenuSection/menu-section";
import SignatureDishes from "../components/SignatureDishes/signature-dishes";

export default function MenuPage() {
  return (
    <div>
      <Header />
      <PageHeader title="Menu" />
      <div className="w-full xl:w-[1280px] xl:m-auto mt-[100px] pt-[20px]">
        <div className="flex flex-col items-center">
          <div className="text-[36px] text-[var(--gold-color)] cursive-font">
            Something New
          </div>
          <div className="text-[25px]">Discover Our Menu</div>
        </div>
        <div className="flex justify-between gap-[12px] mt-[12px] pt-[20px] text-[13px] text-[var(--placeholder-color)] mb-[30px] mx-[20px] xl:mx-[0px]">
          <div className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odio reprehenderit optio. Voluptas aperiam, sunt optio, itaque sequi
            cumque ad magnam eligendi earum ipsa odio ducimus laboriosam vero
            quibusdam atque! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, sequi. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis placeat quisquam minus laudantium tenetur,
            vitae ipsam a suscipit doloremque aliquam.
          </div>
          <div className="w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odio reprehenderit optio. Voluptas aperiam, sunt optio, itaque sequi
            cumque ad magnam eligendi earum ipsa odio ducimus laboriosam vero
            quibusdam atque! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt, sequi.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Debitis placeat quisquam minus laudantium tenetur,
            vitae ipsam a suscipit doloremque aliquam.
          </div>
        </div>
        <MenuSection />
      </div>
      <div className="h-[1px] w-full bg-[var(--gold-color)] my-[50px]"></div>
      <SignatureDishes />
      <Footer />
    </div>
  );
}
