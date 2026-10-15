import React from 'react';
import PerspectiveRoomBox from './ui/perspective-room-box';

export const Quote: React.FC = () => {
  return (
    <section id="philosophy" className="bg-[#ebebea] text-[#111111] py-16 md:py-24 px-4 md:px-8 border-t-2 border-[#111111] relative overflow-hidden">
      {/* 3D Perspective Room Box Background */}
      <PerspectiveRoomBox opacity={0.13} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-10 md:p-14 shadow-[6px_6px_0px_#111111] relative overflow-hidden">
          {/* Top Pill / Badge */}
          <div className="flex items-center gap-2 pb-6 mb-8 sm:mb-10 border-b-2 border-[#111111]">
            <span className="w-3 h-3 rounded-full bg-[#5fb57a] border border-[#111111]" />
            <span className="font-display text-xs font-black uppercase tracking-widest text-[#111111]">
              Philosophy // 03
            </span>
          </div>

          {/* Statement */}
          <blockquote className="my-8 sm:my-10 md:my-12">
            <div className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] flex flex-col gap-3 sm:gap-4 md:gap-6 leading-[1.15]">
              <span className="block">
                Body of an{' '}
                <span className="bg-[#5fb57a] text-[#111111] px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-[#111111] inline-block -rotate-1">
                  ATHLETE
                </span>
                .
              </span>
              <span className="block">
                Mind of a{' '}
                <span className="bg-[#5fb57a] text-[#111111] px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-[#111111] inline-block rotate-1">
                  STOIC
                </span>
                .
              </span>
              <span className="block">
                Spirit of a{' '}
                <span className="bg-[#5fb57a] text-[#111111] px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-[#111111] inline-block -rotate-1">
                  WARRIOR
                </span>
                .
              </span>
              <span className="block">
                Heart of an{' '}
                <span className="bg-[#5fb57a] text-[#111111] px-2 sm:px-2.5 py-0.5 rounded-lg border-2 border-[#111111] inline-block rotate-1">
                  ARTIST
                </span>
                .
              </span>
            </div>
          </blockquote>

          {/* Bottom Horizontal Line */}
          <div className="border-t-2 border-[#111111] w-full mt-8 sm:mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Quote;

