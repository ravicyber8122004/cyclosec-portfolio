// icons 
import { IoClose, IoMenu } from "react-icons/io5";
// react imports
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// framer motion 
import { AnimatePresence, motion } from "framer-motion";
//  custom components 
import { PrimaryButton, SecondaryButton } from "../Buttons";
// all link routes
import { navLinks } from "./routes";
// navbar logo
import { logo_50px } from "../../Assets/company_img";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const subMenuAnimate = {
    enter: { opacity: 1, rotateX: 0, display: "block", transition: { duration: 0.3 } },
    exit: { opacity: 0, rotateX: -15, display: "none", transition: { duration: 0.3 } },
  };

  const subMenuDrawer = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" },
  };

  return (
    <>
      <section className="py-2 lg:py-8 fixed w-full top-0 z-50">
        <div className="w-full lg:max-w-[85%] lg:mx-auto">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur mx-4">
            <div className="grid grid-cols-2 lg:[grid-template-columns:1fr_3fr_1.8fr] p-2 px-4 md:px-2 items-center">
              <div className="flex items-center gap-x-1">
                <img className="h-8 pl-1 w-auto" src={logo_50px} alt="Cyclosec Logo" />
                <h3 className="font-semibold text-white">Cyclosec</h3>
              </div>

              <nav className="lg:flex items-center justify-center hidden gap-5 font-medium text-white">
                {navLinks.map((link, index) =>
                  link.hasSubmenu ? (
                    <div
                      key={link.label}
                      className="relative group"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className="flex items-center gap-1 hover:text-PrimaryTextColour cursor-pointer transition-all duration-150">
                        {link.label}
                        <i className="fa fa-angle-down" />
                      </span>

                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-neutral-900/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/10 w-max"
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            variants={subMenuAnimate}
                          >
                            <div className={`grid gap-7 grid-cols-${link.gridCols}`}>
                              {link.subMenu.map((item) => (
                                <NavLink
                                  to={item.path}
                                  key={item.name}
                                  className="flex items-center gap-x-4 group"
                                >
                                  <div className="bg-white/5 p-2 rounded-md group-hover:bg-white group-hover:text-PrimaryTextColour duration-300">
                                    {item.icon && <item.icon size={20} />}
                                  </div>
                                  <div>
                                    <h6 className="font-semibold">{item.name}</h6>
                                    <p className="text-sm text-gray-300">{item.description}</p>
                                  </div>
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className="flex items-center gap-1 hover:text-PrimaryTextColour cursor-pointer transition-all duration-150"
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </nav>

              <div className="flex justify-end gap-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? "close" : "menu"}
                    initial={{ opacity: 0, rotate: isOpen ? -90 : 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: isOpen ? 180 : -90, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <IoClose
                        className="md:hidden cursor-pointer"
                        size={25}
                        color="white"
                        onClick={() => setIsOpen(false)}
                      />
                    ) : (
                      <IoMenu
                        className="md:hidden cursor-pointer"
                        size={25}
                        color="white"
                        onClick={() => setIsOpen(true)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <SecondaryButton
                  className="hover:bg-PrimaryTextColour hover:text-neutral-950 transition-all duration-200 hidden md:inline-flex"
                  name="Sign Up"
                  Route="/home"
                />
                <PrimaryButton
                  className="hover:bg-green-400 transition-all duration-200 hidden md:inline-flex"
                  name="Log In"
                  Route="/home"
                />
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="max-h-[80vh] overflow-y-auto"
                >
                  <div className="flex flex-col md:hidden items-center gap-4 px-8 py-4 text-white">
                    {navLinks.map((link, index) => {
                      const isActive = clickedIndex === index;
                      return (
                        <div key={link.label} className="w-full">
                          {link.hasSubmenu ? (
                            <button
                              onClick={() => setClickedIndex(isActive ? null : index)}
                              className="flex justify-between w-full font-medium py-2"
                            >
                              <span>{link.label}</span>
                              <i
                                className={`fa fa-angle-down transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                              />
                            </button>
                          ) : (
                            <NavLink
                              to={link.path}
                              onClick={() => setIsOpen(false)}
                              className="flex w-full font-medium py-2"
                            >
                              {link.label}
                            </NavLink>
                          )}

                          {link.hasSubmenu && isActive && (
                            <motion.ul
                              initial="exit"
                              animate="enter"
                              exit="exit"
                              variants={subMenuDrawer}
                              className="pl-4 py-2 flex flex-col gap-2"
                            >
                              {link.subMenu.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => setIsOpen(false)}
                                  className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-5"
                                >
                                  <item.icon className="text-PrimaryTextColour" size={20} />
                                  <span>{item.name}</span>
                                </NavLink>
                              ))}
                            </motion.ul>
                          )}
                        </div>
                      );
                    })}

                    <div className="flex justify-center w-full gap-2 pt-4">
                      <PrimaryButton name="Log In" Route="/home" />
                      <SecondaryButton name="Sign Up" Route="/home" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="pb-[5rem] md:pb-[8rem] lg:pb-[10rem]"></div>
    </>
  );
}
