import cn from "classnames";
import s from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn(s.root, s.loading)}
        d="M7 .333A.667.667 0 0 0 6.333 1v2a.667.667 0 1 0 1.334 0V1A.667.667 0 0 0 7 .333ZM7 10.333a.667.667 0 0 0-.667.667v2a.667.667 0 1 0 1.334 0v-2A.667.667 0 0 0 7 10.333ZM13 6.333a.667.667 0 0 1 0 1.334h-2a.667.667 0 1 1 0-1.334h2ZM3.667 7A.667.667 0 0 0 3 6.333H1a.667.667 0 0 0 0 1.334h2A.667.667 0 0 0 3.667 7ZM10.771 2.286a.667.667 0 1 1 .943.943L10.3 4.643a.667.667 0 1 1-.943-.943l1.414-1.414ZM4.643 9.357a.667.667 0 0 0-.943 0L2.286 10.77a.667.667 0 1 0 .943.943L4.643 10.3a.667.667 0 0 0 0-.943ZM11.714 10.771a.667.667 0 1 1-.943.943L9.357 10.3a.667.667 0 0 1 .943-.943l1.414 1.414ZM4.643 4.643a.667.667 0 0 0 0-.943L3.23 2.286a.667.667 0 1 0-.943.943L3.7 4.643c.26.26.683.26.943 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LoadingSpinner;
