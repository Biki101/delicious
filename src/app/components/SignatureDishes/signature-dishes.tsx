import SignatureDishesCard from "../SignatureDishesCard/signature-dishes-card";
import image from "../../assets/menu-image1.jpg";

export default function SignatureDishes() {
  return (
    <div className=" xl:w-[1280px] xl:m-auto w-full p-[20px]">
      <div className="flex flex-col items-start">
        <div className="text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[25px]">Our Signature Dishes</div>
        <div className="self-center flex flex-wrap justify-center gap-[20px]">
          <div className="mt-[50px] w-full sm:w-[570px] flex flex-col gap-[50px] xsm:gap-[20px] ]">
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
          </div>
          <div className="mt-[50px] w-full sm:w-[570px] flex flex-col gap-[50px] xsm:gap-[20px]">
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
            <SignatureDishesCard
              category="Chicken / Pork / Veggies"
              price="20"
              title="Macorroni Pizza"
              image={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
