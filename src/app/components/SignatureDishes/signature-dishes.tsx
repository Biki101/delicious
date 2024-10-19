import SignatureDishesCard from "../SignatureDishesCard/signature-dishes-card";

export default function SignatureDishes() {
  return (
    <div className="outer-container">
      <div className="flex flex-col items-start">
        <div className="text-[36px] text-[var(--gold-color)] cursive-font">
          Something New
        </div>
        <div className="text-[25px]">Our Signature Dishes</div>
        <div className="mt-[50px]">
          <SignatureDishesCard />
        </div>
      </div>
    </div>
  );
}
