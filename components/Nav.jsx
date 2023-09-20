'use client';

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar";

const Nav = () => {
  const { data: session } = useSession();
  const transNav = 'pl-10 bg-white drop-shadow-md fixed w-full z-10 text-lg font-semibold'
  const NotNav = 'bg-orange-400 text-white font-semibold px-3 pl-14 py-4 fixed w-full z-10'
  const pathName = usePathname()
    return (
    <>
      <nav className={session?.user ? NotNav : transNav}>
          {session?.user ? (
            <div className="flex justify-between">
              <Link href='/'>Home</Link>
              <span onClick={signOut} className="cursor-pointer">
                  Sign Out
              </span>
            </div>
          ):(
            <div className="flex justify-between">
              <Link href='/' className="py-3">Home</Link>
              {pathName !== '/signIn'&&(
                <Link href='/signIn' className="bg-blue-600 w-36 flex items-center gap-3 py-3 justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-white">
                     <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                  </svg>
                  Sign In
                </Link>
              )}
            </div>
          )}
      </nav>
      {session?.user ? (
          <Sidebar 
            userData={session?.user?.id}
            pathName={pathName}
          />
      ): null}
    </>
  );
};

export default Nav;
