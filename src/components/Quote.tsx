"use client";

import DotPattern from "@/components/ui/dot-pattern-1";

export function Quote() {
  return (
    <div className="mx-auto mb-8 max-w-[1100px] px-6">
      <div className="relative flex flex-col items-start border border-red-500">
        <DotPattern width={5} height={4} />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500 text-white" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500 text-white" />

        <div className="relative z-20 mx-auto w-full py-4 md:py-6 px-6 md:px-8 text-left">
          <p className="md:text-md text-xs text-red-500 lg:text-lg xl:text-2xl mb-4 font-mono">
            I believe
          </p>
          <div className="text-2xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl flex flex-col items-start leading-[1.1]">
            <div className="flex gap-x-2 md:gap-x-4 flex-wrap">
              <h1 className="font-semibold text-text-primary">"Design should be</h1>
              <p className="font-thin text-text-primary">easy to</p>
            </div>
            <div className="flex gap-x-2 md:gap-x-4 flex-wrap">
              <p className="font-thin text-text-primary">understand</p>
              <h1 className="font-semibold text-text-primary">because</h1>
              <p className="font-thin text-text-primary">simple</p>
            </div>
            <div className="flex gap-x-2 md:gap-x-4 flex-wrap">
              <p className="font-thin text-text-primary">ideas</p>
              <h1 className="font-semibold text-text-primary">are quicker to</h1>
            </div>
            <h1 className="font-semibold text-text-primary">grasp..."</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
