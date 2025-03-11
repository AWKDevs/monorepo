import Link from "next/link";

type HeaderButtonProps = {
  href: string;
  insideText?: string;
  icon?: React.ReactNode;
  color?: string;
  mobile?: boolean;
};

const HeaderButtonBronwBorder: React.FC<HeaderButtonProps> = ({ href, insideText, icon, mobile }) => {
  return (
    <Link
      href={href}
      className={`${
        mobile
          ? "justify-center py-3 text-center"
          : "flex px-3 py-2"
      } text-custom-light bg-custom-dark rounded-[10px] hover:bg-custom-dark-secondary hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform active:-translate-y-0.5 flex items-center gap-2`}
    >
      <div className="text-2xl">
        {icon}
      </div>
      {insideText}
    </Link>
  );
};

const HeaderIconButton: React.FC<HeaderButtonProps> = ({ href, icon, color, mobile }) => {
  return (
    <Link
      href={href}
      className={`${
        mobile ? "text-2xl mx-auto" : "flex text-3xl"
      } items-center hover:transition-all hover:-translate-y-1 active:scale-95 active:transition-transform active:-translate-y-0.5`}
      style={{ color: `var(--${color})` }}
    >
      {icon}
    </Link>
  );
};

export { HeaderButtonBronwBorder, HeaderIconButton };
