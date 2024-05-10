import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ABHIJIT ROY
        </motion.span>
        <div className="social">
          {/* <a href="#">
            <img src="/facebook.png" alt="" />
          </a> */}
          <motion.a whileHover={{ scale: 1.3 }} href="https://leetcode.com/u/abhi17r/">
            <img src="/leetcode.png" alt="leetcode profile" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/abhijit-roy-a873601b0/">
            <img src="/linkedin.png" alt="linkedin profile" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/Abhiroy17">
            <img id="github" src="/github.png" alt="github profile" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
