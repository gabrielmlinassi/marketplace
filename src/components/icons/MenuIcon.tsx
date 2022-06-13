type ChatProps = {
  className?: string;
  style?: React.CSSProperties;
};

function MenuIcon({ className, style }: ChatProps) {
  return (
    <svg
      width="26"
      height="10"
      viewBox="0 0 26 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="26" height="2" rx="1" fill="#FCFCF9" />
      <rect y="8" width="26" height="2" rx="1" fill="#FCFCF9" />
    </svg>
  );
}

export default MenuIcon;
