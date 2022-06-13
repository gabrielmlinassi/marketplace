import s from "./Container.module.scss";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={s.root}>{children}</div>;
};

export default Container;
