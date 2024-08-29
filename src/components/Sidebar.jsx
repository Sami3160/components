import { useEffect } from "react";
import close from "../assets/cancel_24dp_5F6368 1.png";
import { motion } from "framer-motion";
import home from "../assets/icons8-home.png";
import rooms from "../assets/icons8-bed.png";
import about from "../assets/icons8-about-us.png";
import gallery from "../assets/icons8-gallery.png";
import contact from "../assets/icons8-contact-us.png";
function Sidebar({ showSidebar }) {
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    console.log("sidebar component");
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };
  return (
    <div className="absolute top-0 ">
      <motion.div
        initial="hidden"
        animate={showSidebar ? "visible" : "hidden"}
        exit="exit"
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 z-20 w-[70vw] h-[100vh] bg-[#2E2E2E] text-white"
      >
        <div className="flex justify-between h-[100vh]">
          <div className="flex flex-col justify-start m-4 gap-3">
            <a
              href="/home"
              className="text-sm font-bold mb-5 leading-tight text-golden"
            >
              Adity Residency Lodging & Boarding
            </a>
            <a href="/home" className="text-2xl font-bold flex items-center">
              <img src={home} alt="home" className="w-6 h-6 mr-2" />
              Home
            </a>
            <a href="/rooms" className="text-2xl font-bold flex items-center">
              <img src={rooms} alt="home" className="w-6 h-6 mr-2" />
              Rooms
            </a>
            <a href="/home#about" className="text-2xl font-bold flex items-center">
              <img src={about} alt="home" className="w-6 h-6 mr-2" />
              About
            </a>
            <a href="/gallery" className="text-2xl font-bold flex items-center">
              <img src={gallery} alt="home" className="w-6 h-6 mr-2" />
              Gallery
            </a>
            <a href="/contact" className="text-2xl font-bold flex items-center">
              <img src={contact} alt="home" className="w-6 h-6 mr-2" />
              Contact
            </a>
          </div>
          <div
            onClick={() => showSidebar(false)}
            // onMouseUp={() => alert("hovered")}
            className="bg-golden rounded-full text-white text-lg font-bold px-3 py-2 cursor-pointer h-10 mt-4 mr-4"
          >
            Close
          </div>
        </div>
      </motion.div>
      <div
        className="fixed z-[18] top-0 left-0 h-[100vh] w-[100vw] bg-golden bg-opacity-25"
        onClick={() => showSidebar(false)}
      ></div>
    </div>
  );
}

export default Sidebar;