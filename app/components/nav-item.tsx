'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavItem({
  path,
  name,
}: {
  path: string;
  name: string;
}) {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        'transition-all hover:text-cyan-600 flex align-middle',
        {
          'text-black': !isActive,
          '': isActive
        }
      )}
    >
      <span className="relative py-1 px-2">
        {name}
          {isActive && (
            <motion.div
              className="absolute h-[3px] top-7 mx-2 inset-0 bg-cyan-300 z-[-1]"
              layoutId="sidebar"
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 30,
              }}
            />
          )}
      </span>
    </Link>
  );
}
