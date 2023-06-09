"use client";

import * as React from "react";
import * as styles from './button.css';
import {button} from "./button.css";
export const Button = ({children, className}: {children: string; className?: string}) => {
  return <button onClick={() => alert(children)} className={`${styles.button({size: 'sm'})} ${className}`}>{children}</button>;
};
