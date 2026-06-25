import { motion, useReducedMotion } from "framer-motion";

/**
 * Wraps children in a fade + rise animation that plays once when the
 * element scrolls into view. Respects prefers-reduced-motion.
 *
 * Props:
 *  - delay: seconds before the animation starts (for staggering)
 *  - y: starting vertical offset in px
 *  - as: motion element tag, defaults to "div"
 */
export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
  ...rest
}) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.8, 0.46, 0.97] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};
