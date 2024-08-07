'use client';
import React, { useState } from 'react';

import Link from 'next/link';
// import Image from 'next/image';

import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Company', link: '/' },
    { id: 3, text: 'Resources', link: '/' },
    { id: 4, text: 'About', link: '/' },
    { id: 5, text: 'Contact', link: '/2' },
  ];

  return (
    <header className="mx-auto flex min-h-16 items-center justify-between bg-black px-4 text-white">
      <Link href="/" className="flex items-center">
        {/* <Image
              loading="lazy"
              className="h-auto min-w-32"
              width={100}
              height={80}
              src="/logo4.png"
              alt="logo"
            /> */}
        <p className="w-full text-3xl font-bold text-lime-200">SKELETON</p>
      </Link>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-lime-200 hover:text-black">
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        <Bars3CenterLeftIcon className="size-6 text-white" />
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 h-full w-full translate-y-0 transform bg-[#000300] duration-500 ease-in-out md:hidden'
            : 'fixed left-0 top-0 h-full w-full -translate-y-full transform bg-[#000300] duration-500 ease-in-out md:hidden'
        }>
        {/* Mobile Logo */}
        <div className="mx-auto flex min-h-16 items-center justify-between px-4">
          <Link href="/" className="flex w-1/2 items-center">
            {/* <Image
              loading="lazy"
              className="h-auto min-w-32"
              width={100}
              height={80}
              src="/logo4.png"
              alt="logo"
            /> */}
            <h1 className="m-4 text-3xl font-bold text-lime-200">SKELETON</h1>
          </Link>
          <div onClick={handleNav} className="block md:hidden">
            <XMarkIcon className="size-6 text-white" />
          </div>
        </div>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 text-center duration-300 hover:bg-lime-200 hover:text-black">
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
