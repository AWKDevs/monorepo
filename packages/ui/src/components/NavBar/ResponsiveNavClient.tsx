"use client"

import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import type { ReactNode } from 'react';

type ResponsiveNavClientProps = {
  menuDesktop: ReactNode;
  menuMobile: ReactNode;
  logo: ReactNode;
};

const ResponsiveNavClient = ({ menuDesktop, menuMobile, logo }: ResponsiveNavClientProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full border-b bg-white">
      <div className="w-full flex items-center justify-between px-8 h-16 border-2 border-red-500">
        {/* Logo a la izquierda */}
        <div className="flex-shrink-0 border-2 border-green-500">{logo}</div>

        {/* Menú Desktop alineado a la derecha */}
        <div className="hidden pre_md:flex ml-auto border-2 border-blue-500">{menuDesktop}</div>

        {/* Botón de menú móvil */}
        <button
          onClick={toggleMenu}
          className="pre_md:hidden p-2 rounded-md text-[rgb(249,217,120)] hover:bg-[rgb(180,135,100)] focus:outline-none transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <BiX className="h-6 w-6 hover:transition-transform duration-300 hover:rotate-180" />
          ) : (
            <BiMenu className="h-6 w-6 hover:transition-transform duration-50 hover:animate-pulse" />
          )}
        </button>
      </div>
    </nav>
  );
};
 
export default ResponsiveNavClient;
