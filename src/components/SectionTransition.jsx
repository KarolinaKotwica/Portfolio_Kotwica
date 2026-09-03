import { m } from "framer-motion";

const SectionTransition = ({ children, y = 18, duration = 0.55, delay = 0 }) => {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
};

export default SectionTransition;
