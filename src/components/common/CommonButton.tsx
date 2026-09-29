export default function CommonButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-full cursor-pointer text-text-black bg-secondary-lime px-6 py-3 text-lg font-medium font-satoshi"
    >
      {label}
    </button>
  );
}
