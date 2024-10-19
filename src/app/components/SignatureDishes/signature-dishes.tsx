import SignatureDishesCard from "../SignatureDishesCard/signature-dishes-card";
import image from "../../assets/menu-image1.jpg";

export default function SignatureDishes() {
  return (
    <div className="outer-container">
      <div className="flex flex-col items-start">
        <div className="text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[25px]">Our Signature Dishes</div>
        <div className="flex gap-[20px]">
          <div className="mt-[50px] w-full flex flex-col gap-[20px]">
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
          <div className="mt-[50px] w-full flex flex-col gap-[20px]">
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
