type ArrowDownProps = {
  className?: string;
  style?: React.CSSProperties;
};

function HomeIcon({ className, style }: ArrowDownProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 13.6715C19 18.2075 18 18.7075 10 18.7075C2.00003 18.7075 0.999991 17.7075 1.00003 13.6715C1.00006 11.5302 1 12.0261 1 10.1519C1 8.27767 1.57474 7.20752 4.94411 4.49699C6.35369 3.36304 7.57248 2.44626 8.46005 1.79862C9.39245 1.11828 10.6264 1.09199 11.5609 1.76939C12.3853 2.36691 13.544 3.2494 15.0559 4.49699C18.5 7.3391 19 8.20752 19 10.1519C18.9999 13.912 19 10.5302 19 13.6715Z"
        stroke="currentColor" //#EBCD81
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15.7075C7.375 14.2075 7 12.7075 10 12.7075C13 12.7075 12.625 14.2075 13 15.7075"
        stroke="currentColor" //#EBCD81
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HomeIcon;
