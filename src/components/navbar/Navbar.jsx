import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-textColor"
        >
          Glns.dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/giwrgos-g-b74448250/">
            <FaLinkedin color="#0077B5" size="40" />
          </a>
          <a href="https://github.com/GiwrgosGln">
            <FaGithubSquare color="black" size="40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
