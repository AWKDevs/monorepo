import Link from 'next/link';
import { SiCoffeescript } from 'react-icons/si';
import { BiSolidCart } from 'react-icons/bi';
import ResponsiveNavClient from './ResponsiveNavClient';
import { HeaderButtonBronwBorder, HeaderIconButton } from '../HeaderButtons';
import React from 'react';

const ResponsiveNav = () => {
  const logo = (
    <Link href="/" className="flex items-center space-x-2">
      <SiCoffeescript className="h-6 w-6 text-custom-light" />
      <span className="font-bold text-xl text-custom-light">Monorepo app</span>
    </Link>
  );

	{/* TODO: centralize buttons text in metadata bank. */}
  const menuDesktop = (
    <>
      <HeaderIconButton href="/cart" icon={<BiSolidCart />} color="custom-light" />
      <HeaderButtonBronwBorder href="/menu" insideText="MENÚ" />
      <HeaderButtonBronwBorder href="/recommendations" insideText="RECOMENDACIONES" />
      <HeaderButtonBronwBorder href="/promotions" insideText="PROMOCIONES" />
      <HeaderButtonBronwBorder href="/new" insideText="LO NUEVO" />
      <HeaderButtonBronwBorder href="/about" insideText="NOSOTROS" />
      <HeaderButtonBronwBorder href="/contact" insideText="CONTÁCTANOS" />
    </>
  );

	{/* TODO: centralize buttons text in metadata bank. */}
  const menuMobile = (
    <>
      <HeaderButtonBronwBorder href="/cart" icon={<BiSolidCart />} insideText="Carrito" color="custom-light" mobile />
      <HeaderButtonBronwBorder href="/menu" insideText="MENÚ" mobile />
      <HeaderButtonBronwBorder href="/recommendations" insideText="RECOMENDACIONES" mobile />
      <HeaderButtonBronwBorder href="/promotions" insideText="PROMOCIONES" mobile />
      <HeaderButtonBronwBorder href="/new" insideText="LO NUEVO" mobile />
      <HeaderButtonBronwBorder href="/about" insideText="NOSOTROS" mobile />
      <HeaderButtonBronwBorder href="/contact" insideText="CONTÁCTANOS" mobile />
    </>
  );

  return <ResponsiveNavClient logo={logo} menuDesktop={menuDesktop} menuMobile={menuMobile} />;
};

export default ResponsiveNav;
