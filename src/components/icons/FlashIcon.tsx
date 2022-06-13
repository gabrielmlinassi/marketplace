type FlashProps = {
  className?: string;
  style?: React.CSSProperties;
};

function FlashIcon({ className, style }: FlashProps) {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9072 9.0354H10.818C10.4193 9.0354 10.0207 8.73679 10.0207 8.2391V2.76452C10.0207 1.86868 8.92457 1.37099 8.227 1.96822L1.35102 11.4243C0.65346 12.1211 1.05207 13.3155 2.04859 13.3155H5.63605C6.03466 13.3155 6.43327 13.6141 6.43327 14.1118V19.5864C6.43327 20.5818 7.52944 21.0795 8.227 20.3827L14.6047 11.0262C15.4019 10.2299 14.9037 9.0354 13.9072 9.0354Z"
        stroke="currentColor" //#777E90
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlashIcon;
