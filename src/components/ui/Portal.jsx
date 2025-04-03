import {useRef} from "react";
import {createPortal} from "react-dom";
import { useIsomorphicLayoutEffect } from "react-use";

export const Portal = ({selector, children}) => {
  const ref = useRef(null);
  useIsomorphicLayoutEffect(() => {
    ref.current = document.querySelector(selector);
  }, []);   
  if (!ref.current) return null;
  return createPortal(children, ref.current);
};  
