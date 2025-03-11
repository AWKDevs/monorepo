import React from 'react';

type ResponsiveNavClientProps = {
  logo: React.ReactNode;
  menuDesktop: React.ReactNode;
  menuMobile: React.ReactNode;
};

const ResponsiveNavClient = ({ logo, menuDesktop, menuMobile }: ResponsiveNavClientProps) => {
  return (
    <nav className="container mx-auto px-4 py-2 flex justify-between items-center bg-green-500">
      {/* Logo */}
      {logo}

      {/* Menú Desktop (visible en pantallas medianas y grandes) */}
      <div className="hidden md:flex items-center gap-4 space-x-4">
        {menuDesktop}
      </div>

      {/* Menú Mobile (visible solo en móviles) */}
      <div className="flex md:hidden">
        {menuMobile}
      </div>
    </nav>
  );
};

export default ResponsiveNavClient;

