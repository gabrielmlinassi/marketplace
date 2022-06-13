type CrossProps = {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  ml?: string;
  mr?: string;
};

function ShareIcon({ className, width = 20, ml, mr, style }: CrossProps) {
  return (
    <svg
      width={width}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ marginLeft: ml, marginRight: mr, ...style }}
    >
      <path
        d="M10 1C3 1 1 3 1 10C1 17 3 19 10 19C15.2937 19 17.7279 17.8562 18.6001 14.5"
        stroke="#7F8596"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12C6 10 7 7 11.5 7C17.3726 7 17.9952 7 17.9952 7"
        stroke="#7F8596"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3L19 7L15 11"
        stroke="#7F8596"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ShareIcon;
