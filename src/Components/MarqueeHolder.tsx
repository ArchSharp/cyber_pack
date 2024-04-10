import Marquee from "react-fast-marquee";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type IMarqueeHolderProps = {
  mDirection?: any;
  mPauseOnHover?: boolean;
  mSpeed?: number;
  mDelay: number;
  mLoop?: number;
  mGradient?: boolean;
  mGradWidth?: string | number;
  mgradientColor?: string;
  mPlay?: boolean;
  mAutoFill?: boolean;
  mclassName?: string;
  mStyle?: object;
  children: ReactJSXElement;
};

export const MarqueeHolder = ({
  mDirection = "left",
  mPauseOnHover = true,
  mSpeed = 50,
  mDelay = 0,
  mLoop = 0,
  mGradient = false,
  mGradWidth = 200,
  mgradientColor = "rgb(255, 255, 255)",
  mPlay = true,
  mAutoFill = false,
  mclassName = "",
  mStyle = {},
  children,
}: IMarqueeHolderProps) => {
  return (
    <Marquee
      direction={mDirection}
      pauseOnHover={mPauseOnHover}
      speed={mSpeed}
      delay={mDelay}
      loop={mLoop}
      gradient={mGradient}
      gradientWidth={mGradWidth}
      gradientColor={mgradientColor}
      autoFill={mAutoFill}
      play={mPlay}
      className={mclassName}
      style={mStyle}
    >
      {children}
    </Marquee>
  );
};
