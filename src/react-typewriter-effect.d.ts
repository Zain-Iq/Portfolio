declare module 'react-typewriter-effect' {
  import type { ComponentType, HTMLAttributes } from 'react';

  export interface TypewriterProps extends HTMLAttributes<HTMLElement> {
    textStyle?: Record<string, string | number>;
    startDelay?: number;
    cursorColor?: string;
    multiText?: string[];
    multiTextDelay?: number;
    typeSpeed?: number;
    deleteSpeed?: number;
    multiTextLoop?: boolean;
  }

  const Typewriter: ComponentType<TypewriterProps>;
  export default Typewriter;
}

