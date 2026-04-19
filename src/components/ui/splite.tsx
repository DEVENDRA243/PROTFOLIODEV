'use client'

import { Suspense, lazy } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={`w-full h-full ${className}`}>
      <AnimatePresence>
        {inView && (
          <Suspense 
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-bg">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Loading 3D Scene...</span>
                </div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <Spline
                scene={scene}
                className="w-full h-full"
              />
            </motion.div>
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  )
}
