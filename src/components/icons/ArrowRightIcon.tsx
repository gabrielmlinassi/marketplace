type Props = {
  className?: string;
  style?: React.CSSProperties;
  ml?: number;
  mr?: number;
};

function ArrowRightIcon({ className, style, ml, mr }: Props) {
  return (
    <svg
      width={16}
      height={14}
      viewBox="0 0 18 14"
      style={{ ...style, marginLeft: ml, marginRight: mr }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.811 0.75L17.25 7M17.25 7L10.811 13.25M17.25 7H0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowRightIcon;
