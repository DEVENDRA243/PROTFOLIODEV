"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { CardStackItem } from "../../types/projects"

interface AnimatedProps {
  items: CardStackItem[]
}

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ item }: { item: CardStackItem }) {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a0a0a]">
      <div className="flex h-[240px] w-full items-center justify-center overflow-hidden rounded-t-3xl bg-[#050505]">
        <img
          src={item.imageSrc || "/placeholder.svg"}
          alt={item.title}
          className={`h-full w-full select-none ${
            item.title === "Family Hub" ? "object-contain p-2" : "object-cover"
          }`}
        />
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-6 py-5">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-xl font-bold text-white tracking-tight">{item.title}</span>
          <span className="text-sm text-white/50 line-clamp-1">{item.description}</span>
        </div>
        <a 
          href={item.href || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-11 shrink-0 cursor-pointer select-none items-center gap-1.5 rounded-full bg-white px-6 text-sm font-bold text-black hover:bg-white/90 transition-colors shadow-lg"
        >
          Go Live
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function AnimatedCard({
  item,
  index,
  isAnimating,
}: {
  item: CardStackItem
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={item.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[340px] w-[380px] items-center justify-center overflow-visible rounded-[2.5rem] bg-transparent will-change-transform sm:w-[580px]"
    >
      <div className={index === 0 ? "opacity-100 w-full h-full" : "opacity-0 w-full h-full transition-opacity duration-300"}>
        <div className="relative h-full w-full bg-[#0a0a0a] border border-white/10 overflow-hidden rounded-[2.5rem] flex flex-col">
          <CardContent item={item} />
        </div>
      </div>
    </motion.div>
  )
}

export default function AnimatedCardStack({ items }: AnimatedProps) {
  // We keep track of the current 3 items being shown
  const [visibleItems, setVisibleItems] = useState(() => items.slice(0, 3))
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextProjectIndex, setNextProjectIndex] = useState(3)

  const handleAnimate = () => {
    if (items.length <= 1) return
    setIsAnimating(true)

    // The next item to enter the stack
    const nextItem = items[nextProjectIndex % items.length]
    
    // Shift: remove the front item, move the others forward, and add a new one at the back
    setVisibleItems((prev) => [...prev.slice(1), nextItem])
    setNextProjectIndex((prev) => (prev + 1) % items.length)
    
    // Reset animation state shortly after to allow new triggers
    setTimeout(() => {
      setIsAnimating(false)
    }, 100)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[440px] w-full overflow-hidden sm:w-[700px]">
        <AnimatePresence initial={false}>
          {visibleItems.map((item, index) => (
            <AnimatedCard key={item.id} item={item} index={index} isAnimating={isAnimating} />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center py-8">
        <button
          onClick={handleAnimate}
          className="flex h-11 cursor-pointer select-none items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/5 bg-[#1a1a1a] px-8 text-base font-bold text-white transition-all hover:bg-[#252525] active:scale-[0.98] shadow-2xl"
        >
          Next
        </button>
      </div>
    </div>
  )
}
