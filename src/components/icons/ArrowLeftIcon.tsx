import React from "react";
import ArrowRight from "./ArrowRightIcon";

function ArrowLeftIcon(props: React.ComponentProps<typeof ArrowRight>) {
  return <ArrowRight style={{ transform: "rotate(-180deg)" }} {...props} />;
}

export default ArrowLeftIcon;
