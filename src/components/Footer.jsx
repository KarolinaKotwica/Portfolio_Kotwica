import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()} Karolina Kotwica — {t.footerTagline}
    </motion.footer>
  );
};

export default Footer;
