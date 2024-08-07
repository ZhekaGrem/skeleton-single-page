'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logo, header } from '@/db/data';

import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items

  return (
    <header className="bg-black px-4 text-white">
      <div className="mx-auto flex min-h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            loading="lazy"
            className="h-auto"
            width={logo.height}
            height={logo.height}
            src={logo.src}
            alt={logo.alt}
          />
        </Link>
        <nav>
          <ul className="hidden md:flex">
            {header.navItems.map((item) => (
              <li
                key={item.id}
                className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-lime-200 hover:text-black">
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div onClick={handleNav} className="block md:hidden">
          <Bars3CenterLeftIcon className="size-6 text-white" />
        </div>
      </div>
      <nav
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-full translate-y-0 transform bg-[#000300] duration-500 ease-in-out md:hidden'
            : 'fixed left-0 top-0 h-full w-full -translate-y-full transform bg-[#000300] duration-500 ease-in-out md:hidden'
        }>
        {/* Mobile Logo */}
        <div className="mx-auto flex min-h-16 items-center justify-between px-4">
          <Link href="/" className="flex w-1/2 items-center">
            <Image
              loading="lazy"
              className="h-auto"
              width={logo.height}
              height={logo.height}
              src={logo.src}
              alt={logo.alt}
            />
          </Link>
          <div onClick={handleNav} className="block md:hidden">
            <XMarkIcon className="size-6 text-white" />
          </div>
        </div>
        {/* Mobile Navigation Items */}
        <ul>
          {header.navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer rounded-xl border-b border-gray-600 p-4 text-center duration-300 hover:bg-lime-200 hover:text-black">
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
