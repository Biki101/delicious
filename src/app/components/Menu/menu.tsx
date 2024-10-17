import FiveStars from "../FiveStars/five-stars";
import MenuHeading from "../MenuHeading/menu-heading";
import MenuItems from "../MenuItems/menu-items";

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
      <div className="flex gap-[20px]">
        <div className="w-1/3 border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col gap-[25px] h-fit">
          <MenuHeading label="Starters" />
          <div className="flex flex-col gap-[20px]">
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="20"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="22"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="26"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="29"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="37"
            />
          </div>
        </div>
        <div className="w-1/3 border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col gap-[25px] h-fit">
          <MenuHeading label="Main" />
          <div className="flex flex-col gap-[20px]">
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="20"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="22"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="26"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="29"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="37"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="37"
            />
          </div>
        </div>
        <div className="w-1/3 border-[1px] border-[var(--gold-color)] p-[24px] flex flex-col gap-[25px] h-fit">
          <MenuHeading label="Deserts" />
          <div>
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="20"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="22"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="26"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="29"
            />
            <MenuItems
              dishName="Katti Roll Myoneese Sprinkles Perry Sauce"
              options="Chicken / Buff / Black Pepper / Veggies"
              price="37"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
