type Props = {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  ml?: number;
  mr?: number;
};

function ChatIcon({ className, style, ml, mr, width = 21 }: Props) {
  return (
    <svg
      width={width}
      height={21}
      fill="none"
      viewBox="0 0 21 21"
      style={{ marginLeft: `${ml}px`, marginRight: `${mr}px`, ...style }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10.7075C1 15.7075 5 19.7075 10 19.7075C12.1 19.7075 14.1 18.9075 15.6 17.7075H19.6988C19.8418 17.7075 19.9386 17.5617 19.8831 17.4299L18.4 13.9075C18.8 12.9075 19 11.8075 19 10.7075C19 5.70752 15 1.70752 10 1.70752C5 1.70752 1 5.70752 1 10.7075Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6"
        cy="11.2075"
        r="0.5"
        fill="#777E90"
        stroke="currentColor"
      />
      <circle
        cx="10"
        cy="11.2075"
        r="0.5"
        fill="#777E90"
        stroke="currentColor"
      />
      <circle
        cx="14"
        cy="11.2075"
        r="0.5"
        fill="#777E90"
        stroke="currentColor"
      />
    </svg>
  );
}

export default ChatIcon;
