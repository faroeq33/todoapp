import React from "react";

// Generic type for most React components
type CommonProps<T = {}> = T & {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default CommonProps;
