interface PrimaryButtonProps {
  buttonLabel: string;
}

export default function PrimaryButton({ buttonLabel }: PrimaryButtonProps) {
  return (
    <div className="border-[2px] border-[var(--gold-color)] cursor-pointer w-fit px-[16px] py-[8px] text-[var(--gold-color)] text-[13px] hover:bg-[var(--gold-color)] hover:text-white">
      {buttonLabel}
    </div>
  );
}
