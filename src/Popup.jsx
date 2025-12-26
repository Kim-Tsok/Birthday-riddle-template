import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Popup = ({
  header,
  bodyText,
  link,
  linkText,
  onClose,
  headerColor,
  icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.1, type: "spring", stiffness: 120 }}
        className="bg-white/90 rounded-2xl shadow-2xl p-8 max-w-sm w-[90%] text-center relative border border-white/30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-white rounded-2xl -z-10"></div>

        {icon && (
          <div className="flex items-center justify-center mb-2">
            <img src={icon} width={"50"} height={"50"} />
          </div>
        )}

        <h2 className={`text-3xl font-bold mb-3 ${headerColor}`}>{header}</h2>

        <div className="text-gray-700 mb-6 leading-relaxed">{bodyText}</div>

        {link && linkText ? (
          <Link
            to={link}
            onClick={onClose}
            className="inline-block w-[50%] py-3 bg-[#B569FF] text-white rounded-full hover:bg-[#a050e0] transition-all duration-300 font-medium"
          >
            {linkText}
          </Link>
        ) : (
          <button
            onClick={onClose}
            className="inline-block w-[50%] py-3 bg-[#B569FF] text-white rounded-full hover:bg-[#a050e0] transition-all duration-300 font-medium"
          >
            {linkText}
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Popup;
