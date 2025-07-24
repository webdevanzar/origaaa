"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

// Combine motion props and HTML div props
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export const MotiionDiv = motion.div as React.FC<MotionDivProps>;
