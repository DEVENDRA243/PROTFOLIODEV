import { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`w-full h-full ${className}`}>
      <AnimatePresence>
        {inView && (
          <Suspense
            fallback={
              <div className={`w-full h-full flex items-center justify-center bg-bg text-text-primary ${className}`}>
                <div className="flex flex-col items-center gap-4">
                  <svg className="animate-spin h-8 w-8 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
                  </svg>
                  <span className="text-[10px] text-muted uppercase tracking-[0.2em]">Initializing Experience...</span>
                </div>
              </div>
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
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
  );
}
