import { useEffect } from "react";
import { stateLogger } from "../hooks/stateLogger";
import { motion } from "framer-motion";
import '../customModalStyles.css'
const Backdrop = ({ children, onClick }) => {
  // Log state
  useEffect(() => {
    stateLogger("Backdrop", true);
    return () => stateLogger("Backdrop", false);
  }, []);

  return (
    <motion.div
      className="backdrop-cm"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
