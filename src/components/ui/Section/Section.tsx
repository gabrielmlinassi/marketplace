import React from "react";
import cn from "classnames";

import s from "./Section.module.scss";
import Heading from "@components/ui/Heading";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type SectionTitleProps = {} & BaseProps;
type SectionSubTitleProps = {} & BaseProps;
type SectionProps = {} & BaseProps;

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <Heading variant="h2">{children}</Heading>;
};

const SectionSubTitle = ({
  children,
  className,
  style,
}: SectionSubTitleProps): JSX.Element => {
  return (
    <div style={style} className={cn(s.subTitle, className)}>
      <Heading variant="p">{children}</Heading>
    </div>
  );
};

const Section = ({ children, className, style }: SectionProps): JSX.Element => {
  return (
    <section style={style} className={cn(s.root, className)}>
      {children}
    </section>
  );
};

Section.Title = SectionTitle;
Section.SubTitle = SectionSubTitle;

export default Section;
