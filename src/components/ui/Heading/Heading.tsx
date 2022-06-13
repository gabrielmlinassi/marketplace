import s from "./Heading.module.scss";

type HeadingProps = {
  variant: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
};

function Heading({ variant, children }: HeadingProps): JSX.Element {
  switch (variant) {
    case "h1":
      return <h1 className={s.h1}>{children}</h1>;
    case "h2":
      return <h2 className={s.h2}>{children}</h2>;
    case "h3":
      return <h3 className={s.h3}>{children}</h3>;
    case "p":
      return <p className={s.p}>{children}</p>;
  }
}

export default Heading;
