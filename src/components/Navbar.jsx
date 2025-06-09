import { IoClose, IoMenu } from "react-icons/io5";
import { CompanyLogo } from "../pages";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./index";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  // handles the toggle function of the menu bar in mobile

  const [isOpen, setIsOpen] = useState(false);

  /* handling hover function for desktop */

  const [hoveredIndex, setHoveredIndex] = useState(null);

  /* hadnling click function for mobile */

  const [Clicked, setClicked] = useState(null);

  // hover effect animation for the submenus in desktop view

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      display: "none",
    },
  };

  // drawer animation for the submenus in mobile view

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  // handles the scrolling when the menu bar of mobile is open

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <section className="py-2 lg:py-8 fixed w-full top-0 z-50">
        <div className="w-full lg:max-w-[85%] lg:mx-auto">
          <div className="border border-white/15 rounded-[27px] md:rounded-full lg:rounded-full bg-neutral-950/70 backdrop-blur mx-4">
            {/* Desktop Menu */}

            {/* Logo Design of the Navbar */}
            <div className="grid grid-cols-2 lg:[grid-template-columns:1fr_3fr_1.8fr] p-2 px-4 md:px-2 items-center">
              <div className="flex items-center gap-x-1">
                <div>
                  <img
                    className="h-8 pl-1 w-auto"
                    src={CompanyLogo}
                    alt="Cyclosec Logo"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Cyclosec</h3>
                </div>
              </div>

              {/* Navigation Links starts from here */}
              <div className="lg:flex items-center justify-center hidden">
                <nav className="flex gap-5 font-medium text-white w-auto">
                  {/* navlinks maping menus and submenus */}
                  {/* Hovering effect for the Navlinks */}
                  {navLinks.map((link, index) => (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() =>
                        setHoveredIndex(link.hasSubmenu ? index : null)
                      }
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* react router links if hassubmenu so not route if not so route*/}
                      {link.hasSubmenu ? (
                        <span className="flex justify-center items-center gap-1 hover:text-PrimaryTextColour hover:cursor-pointer transition-all duration-150">
                          {link.label}
                          {link.hasSubmenu && <FaAngleDown />}{" "}
                          {/* icons for menus having submenus  */}
                        </span>
                      ) : (
                        <NavLink
                          className={`flex justify-center items-center gap-1 hover:text-PrimaryTextColour hover:cursor-pointer transition-all duration-150 ${({
                            isActive,
                          }) => (isActive ? "isActive" : "")}`}
                          to={link.path}
                        >
                          {link.label}
                          {link.hasSubmenu && <FaAngleDown />}{" "}
                          {/* icons for menus having submenus  */}
                        </NavLink>
                      )}

                      {/* checks wheather the navlinks have the submenu or not */}
                      {/* Hovering animation of the submenus for Desktop */}
                      {link.hasSubmenu && (
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50 bg-neutral-900/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-white/10 w-max"
                              initial="exit"
                              animate="enter"
                              exit="exit"
                              variants={subMenuAnimate}
                            >
                              <div
                                className={`
                                grid gap-7 grid-cols-${link.gridCols.toString()}
                            `}
                              >
                                {/* Map submenu items based on the menus */}
                                {link.subMenu.map((item, i) => (
                                  <div
                                    key={i}
                                    className="relative cursor-pointer"
                                  >
                                    <NavLink
                                      to={item.path}
                                      className={`flex items-center justify-start gap-x-4 group/menubox ${({
                                        isActive,
                                      }) => (isActive ? "isActive" : "")}`}
                                    >
                                      <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-PrimaryTextColour duration-300">
                                        {item.icon && <item.icon size={20} />}
                                      </div>
                                      <div>
                                        <h6 className="font-semibold">
                                          {item.name}
                                        </h6>
                                        <p className="text-sm text-gray-300">
                                          {item.description}
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Tablet Menu */}

              <div className="flex justify-end gap-2">
                {/* Mobile view menu icon animation */}
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 180, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoClose
                        className="md:hidden hover:cursor-pointer"
                        size={25}
                        color="white"
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoMenu
                        className="md:hidden hover:cursor-pointer"
                        size={25}
                        color="white"
                        onClick={() => setIsOpen(!isOpen)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Buttons for the Tablet View */}

                <SecondaryButton
                  className="hover:bg-PrimaryTextColour hover:border-none hover:text-neutral-950 transition-all duration-200 hidden md:inline-flex"
                  name="Sign Up"
                  Route="/home"
                />
                <PrimaryButton
                  className="hover:cursor-pointer hover:bg-green-400 transition-all duration-200 hidden md:inline-flex"
                  name="Log In"
                  Route="/home"
                />
              </div>
            </div>

            {/* Mobile Menu Navigation Links*/}

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="max-h-[80vh] overflow-y-auto"
                  style={{
                    scrollbarWidth: "thin", // Firefox
                    scrollbarColor: "#4a4a4a #1a1a1a", // Firefox thumb and track
                  }}
                >
                  <div className="flex flex-col md:hidden lg:hidden items-center gap-4 px-8 py-4 text-white">
                    {/* Menu Links for the mobile view */}
                    {navLinks.map((link, i) => {
                      const isClicked = Clicked === i;
                      return (
                        <div key={link.label} className="w-full">
                          {link.hasSubmenu ? (
                            <button
                              onClick={() => setClicked(isClicked ? null : i)}
                              className="flex justify-between items-center w-full text-left font-medium py-2"
                            >
                              <span>{link.label}</span>
                              {link.hasSubmenu && (
                                <FaAngleDown
                                  className={`transition-transform duration-200 ${
                                    isClicked ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </button>
                          ) : (
                            <NavLink
                              to={link.path}
                              onClick={() => setClicked(isClicked ? null : i)}
                              className={`flex justify-between items-center w-full text-left font-medium py-2 ${({
                                isActive,
                              }) => (isActive ? "isActive" : "")}`}
                            >
                              <span>{link.label}</span>
                            </NavLink>
                          )}

                          {/* submenus of the mobile */}
                          {/* submenus animation of the mobile */}

                          {link.hasSubmenu && isClicked && (
                            <motion.ul
                              initial="exit"
                              animate={isClicked ? "enter" : "exit"}
                              variants={subMenuDrawer}
                              className="pl-4 py-2 flex flex-col gap-2"
                            >
                              {link.subMenu.map((item) => (
                                <NavLink
                                  to={item.path}
                                  key={item.name}
                                  className={`p-2 flex items-center hover:bg-white/5 rounded-md cursor-pointer gap-x-5 ${({
                                    isActive,
                                  }) => (isActive ? "isActive" : "")}`}
                                >
                                  <item.icon
                                    className="text-PrimaryTextColour"
                                    size={20}
                                  />
                                  <span>{item.name}</span>
                                </NavLink>
                              ))}
                            </motion.ul>
                          )}
                        </div>
                      );
                    })}
                    <div className="flex items-center justify-center w-full gap-2 pt-4">
                      <span>
                        <PrimaryButton
                          className="inline-block"
                          name="Log In"
                          Route="/home"
                        />
                      </span>
                      <span>
                        <SecondaryButton
                          className="inline-block"
                          name="Sign Up"
                          Route="/home"
                        />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Margin for the hero section */}
      <div className="pb-[5rem] md:pb-[8rem] lg:pb-[10rem]"></div>
    </>
  );
}
