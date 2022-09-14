import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { Children, ReactNode } from "react";

interface UseSlotHookOptions {
  children: ReactNode | Array<ReactNode>;
  name: string;
  fallback?: ReactNode;
}

const useSlot = (options: UseSlotHookOptions): any => {
  const children: Record<string, any> = Children.toArray(options.children);
  const predicate = (child: Record<string, any>) => {
    return child?.props?.name === options.name;
  };

  if (children.some(predicate)) {
    return () => children.find(predicate).props?.children;
  }

  if (options.fallback) {
    return () => options.fallback;
  }

  return null;
};

export default useSlot;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

