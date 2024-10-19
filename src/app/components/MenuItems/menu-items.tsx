interface MenuItemProps {
  dishName: string;
  price: string;
  options: string;
}

export default function MenuItems({ dishName, price, options }: MenuItemProps) {
  return (
    <div className="w-[350px]">
      <div className="mt-[10px] flex justify-between w-full">
        <div>{dishName}</div>
        <div>$ {price}</div>
      </div>
      <div className="text-[13px] text-[var(--placeholder-color)]">
        {options}
      </div>
      <div className="text-[var(--gold-color)]">Order Now</div>
    </div>
  );
}
