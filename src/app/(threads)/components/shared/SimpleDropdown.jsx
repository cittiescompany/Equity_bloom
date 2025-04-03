"use client";
/* eslint-disable react/prop-types */

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

const SimpleDropdown = ({ trigger, items, direction = "bottom-right" }) => {
  const variants = {
    hidden: { y: "-10px", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-10px",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <Menu>
      {({ open }) => (
        <div className={`relative z-10 flex ${open && "z-20" }`}>
          <MenuButton as="div" className="w-full cursor-pointer">
            {trigger}
          </MenuButton>
          <AnimatePresence initial={false} mode="wait">
            {open && (
              <MenuItems
                as={motion.div}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                static
                className={`absolute bg-white text-gray-900 shadow p-2 rounded-xl flex flex-col z-50 min-w-[200px] ${
                  direction === "bottom-right" && "top-full right-0 mt-2"
                }
                    ${direction === "top-right" && "bottom-full right-0 mb-2"}
                    ${
                      direction === "right-bottom" && "left-full bottom-0 ml-2"
                    }`}
              >
                {items.map((item, i) => (
                  <MenuItem key={i}>
                    {({ active }) => (
                      <button
                        className={`whitespace-nowrap flex items-center px-3 py-2 rounded-lg space-x-4 transition-all ${
                          active && "bg-zinc-900/5"
                        }`}
                        onClick={item?.onClick ?? null}
                      >
                        {!!item.icon && <span>{item.icon}</span>}
                        <span>{item.text}</span>
                      </button>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
};

SimpleDropdown.propTypes = {
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      icon: PropTypes.element,
      onClick: PropTypes.func,
    })
  ),
};

export default SimpleDropdown;
