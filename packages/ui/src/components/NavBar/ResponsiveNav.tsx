import Link from 'next/link';
import { SiCoffeescript } from 'react-icons/si';
import { BiSolidCart } from 'react-icons/bi';
import ResponsiveNavClient from './ResponsiveNavClient';
import { HeaderButtonBrownBorder, HeaderIconButton } from '../HeaderButtons';
import React from 'react';

const ResponsiveNav = () => {
  const logo = (
    <Link href="/" className="flex items-center space-x-2 ">
      <SiCoffeescript className="h-6 w-6 text-custom-light" />
      <span className="font-bold text-xl text-custom-light">Monorepo app</span>
    </Link>
  );

	{/* TODO: centralize buttons text in metadata bank. */}
  const menuDesktop = (
    <div className="flex items-center space-x-4 ml-auto">
      <HeaderIconButton href="/cart" icon={<BiSolidCart />} color="custom-light" />
      <HeaderButtonBrownBorder href="/menu" insideText="MENÚ" />
      <HeaderButtonBrownBorder href="/recommendations" insideText="RECOMENDACIONES" />
      <HeaderButtonBrownBorder href="/promotions" insideText="PROMOCIONES" />
      <HeaderButtonBrownBorder href="/new" insideText="LO NUEVO" />
      <HeaderButtonBrownBorder href="/about" insideText="NOSOTROS" />
      <HeaderButtonBrownBorder href="/contact" insideText="CONTÁCTANOS" />
    </div>
  );

	{/* TODO: centralize buttons text in metadata bank. */} const menuMobile = (
    <div>
      <HeaderButtonBrownBorder href="/cart" icon={<BiSolidCart />} insideText="Carrito" color="custom-light" mobile />
      <HeaderButtonBrownBorder href="/menu" insideText="MENÚ" mobile />
      <HeaderButtonBrownBorder href="/recommendations" insideText="RECOMENDACIONES" mobile />
      <HeaderButtonBrownBorder href="/promotions" insideText="PROMOCIONES" mobile />
      <HeaderButtonBrownBorder href="/new" insideText="LO NUEVO" mobile />
      <HeaderButtonBrownBorder href="/about" insideText="NOSOTROS" mobile />
      <HeaderButtonBrownBorder href="/contact" insideText="CONTÁCTANOS" mobile />
    </div>
  );

  return <ResponsiveNavClient logo={logo} menuDesktop={menuDesktop} menuMobile={menuMobile} />;
};

export default ResponsiveNav;
