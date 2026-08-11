'use client';

import { cloneElement, useEffect, useRef, useState, type ReactElement, type Ref } from 'react';

type MotionState = 'static' | 'hidden' | 'visible';
type MotionDirection = 'forward' | 'reverse';

type MotionElementProps = {
  ref?: Ref<HTMLElement>;
  'data-motion'?: MotionState;
  'data-motion-direction'?: MotionDirection;
};

export function RevealOnEnter({ children }: { children: ReactElement<MotionElementProps> }) {
  const ref = useRef<HTMLElement | null>(null);
  const [motionState, setMotionState] = useState<MotionState>('hidden');
  const [motionDirection, setMotionDirection] = useState<MotionDirection>('forward');

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setMotionState('visible');
      return;
    }

    let hasEntered = false;
    let previousScrollY = window.scrollY;
    let currentDirection: MotionDirection = 'forward';

    const updateScrollDirection = () => {
      const nextScrollY = window.scrollY;
      const nextDirection: MotionDirection = nextScrollY >= previousScrollY ? 'forward' : 'reverse';

      previousScrollY = nextScrollY;

      if (nextDirection === currentDirection) {
        return;
      }

      currentDirection = nextDirection;
      setMotionDirection(nextDirection);
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasEntered = true;
          setMotionState('visible');
          return;
        }

        if (hasEntered) {
          setMotionState('hidden');
        }
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return cloneElement(children, {
    ref,
    'data-motion': motionState,
    'data-motion-direction': motionDirection
  });
}
