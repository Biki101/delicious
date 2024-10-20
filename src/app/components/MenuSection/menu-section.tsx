import Image from "next/image";
import MenuHeading from "../MenuHeading/menu-heading";
import MenuItems from "../MenuItems/menu-items";
import menuImage1 from "../../assets/menu-image1.jpg";
import menuImage2 from "../../assets/menu-image2.png";
import menuImage3 from "../../assets/menu-image3.jpg";

export default function MenuSection() {
  return (
    <div className="flex flex-wrap justify-center gap-[20px]">
      <div className="w-1/3 min-w-[370px] max-w-[400px]  border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col items-center gap-[25px] h-fit hover:shadow-sm hover:shadow-[#00000079]">
        <Image
          src={menuImage3}
          width={550}
          height={550}
          className="w-[300px] h-auto"
          alt="menu-image-1"
        />
        <MenuHeading label="Starters" />
        <div className="flex flex-col gap-[20px]">
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="20"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="22"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="26"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="29"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="37"
          />
        </div>
      </div>
      <div className="w-1/3 min-w-[370px] max-w-[400px] border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col items-center gap-[25px] h-fit hover:shadow-sm hover:shadow-[#00000079]">
        <Image
          src={menuImage1}
          width={550}
          height={550}
          className="w-[300px] h-auto"
          alt="menu-image-1"
        />

        <MenuHeading label="Main" />
        <div className="flex flex-col gap-[20px]">
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="20"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="22"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="26"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="29"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="37"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="37"
          />
        </div>
      </div>
      <div className="w-1/3 min-w-[370px] max-w-[400px] border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col items-center gap-[25px] h-fit hover:shadow-sm hover:shadow-[#00000079]">
        <Image
          src={menuImage2}
          width={550}
          height={550}
          className="w-[300px] h-auto"
          alt="menu-image-1"
        />
        <MenuHeading label="Deserts" />
        <div>
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="20"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="22"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="26"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="29"
          />
          <MenuItems
            dishName="Katti Roll Myoneese Sauce"
            options="Chicken / Buff / Black Pepper / Veggies"
            price="37"
          />
        </div>
      </div>
    </div>
  );
}
