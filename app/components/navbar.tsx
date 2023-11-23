'use client'
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { LayoutGroup } from 'framer-motion';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import NavItem from './nav-item';

const Navbar: React.FC = () => {

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Wedding Weekend", href: "/wedding-weekend" },
    { name: "TBD and Luc", href: "/tbd-and-luc" },
    { name: "FAQs", href: "/faqs" },
    { name: "Travel", href: "/travel" },
    { name: "Accomodations", href: "/accomodations" },
    { name: "RSVP", href: "/rsvp" },
  ];

  const navItems = {
    '/': {
      name: 'home',
    },
    '/wedding-weekend': {
      name: 'Wedding Weekend',
    },
    '/tbd-and-luc': {
      name: 'TBD and Luc',
    },
    '/faqs': {
      name: 'FAQs',
    },
    '/travel': {
      name: 'Travel',
    },
    '/accomodations': {
      name: 'Accomodations',
    },
    '/rsvp': {
      name: 'RSVP',
    },
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-end tracking-wide p-4 lg:p-10 lg:justify-center" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Suspense fallback={null}>
            {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })} 
          </Suspense>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-orange-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-cyan-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
