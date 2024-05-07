"use client";

import Countdown, { CountdownRendererFn } from "react-countdown";

const CountDown = () => {
  const timeInMilliSeconds = 10 * 60 * 60 * 1000 + 30 * 60 * 1000 + 10 * 1000;
  const futureDate = Date.now() + timeInMilliSeconds;

  // Custom renderer function
  const renderer: CountdownRendererFn = ({ hours, minutes, seconds }) => (
    <span>
      {hours}h : {minutes}m : {seconds}s
    </span>
  );

  return <Countdown date={futureDate} renderer={renderer} />;
};

export default CountDown;
