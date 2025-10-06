import { cn } from "@/lib/utils";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position = "left",
  className,
  handleClick,
  otherClasses,
}) => {
  return (
    <button
      className={cn(
        "relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none",
        className
      )}
      onClick={handleClick}
    >
      {/* Spinning gradient background */}
      <span className="absolute inset-0 animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Button content */}
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950/90 px-5 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
