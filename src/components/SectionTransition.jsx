import { motion } from "framer-motion";

const SectionTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} 
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition;
