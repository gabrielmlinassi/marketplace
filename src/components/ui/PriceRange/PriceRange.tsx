import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import s from "./PriceRange.module.scss";

const min = 0.01;
const max = 10;
const step = 0.01;
const defaultValue = 5;

const PriceRange = () => {
  const [state, setState] = useState(defaultValue);

  return (
    <div className={s.base}>
      <SliderPrimitive.Root
        className={s.root}
        min={min}
        max={max}
        step={step}
        defaultValue={[5]}
        orientation="horizontal"
        onValueChange={(v) => setState(v[0])}
      >
        <SliderPrimitive.Track>
          <SliderPrimitive.Range>
            <svg width="256" height="16" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="myGradient">
                  <stop offset={`${state * max}%`} stopColor="#EBCD81" />
                  <stop offset="0%" stopColor="#353945" />
                </linearGradient>
              </defs>
              <path
                d="M0 8c0-1.112.888-2.02 2-2.047L248.001.187a7.815 7.815 0 1 1 0 15.625L1.999 10.048A2.047 2.047 0 0 1 0 8Z"
                fill="url('#myGradient')"
              />
            </svg>
          </SliderPrimitive.Range>
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={s.thumb}>
          <div className={s.popover}>{state} ETH</div>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
      <div className={s.info}>
        <span>{state} ETH</span>
        <span>{max} ETH</span>
      </div>
    </div>
  );
};

export default PriceRange;
