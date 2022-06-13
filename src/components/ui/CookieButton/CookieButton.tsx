import { useReducer } from "react";
import Button from "../Button";

import s from "./CookieButton.module.scss";

const CookieButton = () => {
  const [cookieIsAccepted, acceptCookie] = useReducer(() => true, false);

  return (
    <Button
      variant="subtle"
      color="primary"
      size="xs"
      onClick={acceptCookie}
      disabled={cookieIsAccepted}
      className={cookieIsAccepted ? s.cookieAccepted : ""}
    >
      {cookieIsAccepted ? (
        <>
          Accepted
          <div className={s.checkIcon}>
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 4.22222L3.63018 6.5L8.5 1.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </>
      ) : (
        "Accept"
      )}
    </Button>
  );
};

export default CookieButton;
