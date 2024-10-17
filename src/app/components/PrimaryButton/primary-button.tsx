interface PrimaryButtonProps {
  buttonLabel: string;
}

export default function PrimaryButton({ buttonLabel }: PrimaryButtonProps) {
  return (
    <div className="border-[2px] border-[var(--gold-color)] w-fit px-[16px] py-[8px] text-[var(--gold-color)]">
      {buttonLabel}
    </div>
  );
}
