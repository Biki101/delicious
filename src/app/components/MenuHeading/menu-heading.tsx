interface PrimaryLabelProps {
  label: string;
}

export default function MenuHeading({ label }: PrimaryLabelProps) {
  return (
    <div className="border-[1px]  border-[var(--gold-color)] w-full px-[16px] py-[8px] flex justify-center items-center text-[var(--gold-color)]  font-bold">
      {label}
    </div>
  );
}
