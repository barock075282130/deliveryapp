'use client';

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar";

const Nav = () => {
  const { data: session } = useSession();
  const pathName = usePathname()
    return (
    <>
      <nav className="bg-gray-400 p-4">
          {session?.user ? (
            <div className="flex justify-between">
              <Link href='/'>หน้าหลัก</Link>
              <span onClick={signOut} className="cursor-pointer">
                  ออกจากระบบ
              </span>
            </div>
          ):(
            <div className="flex justify-between">
              <Link href='/'>หน้าหลัก</Link>
              {pathName !== '/signIn'&&(
                <Link href='/signIn'>เข้าสู่ระบบ</Link>
              )}
            </div>
          )}
      </nav>
      {session?.user ? (
          <Sidebar 
            wide="fixed w-16 md:w-40 h-screen bg-gray-400 select-none"
            userData={session?.user?.id}
          />
      ): null}
    </>
  );
};

export default Nav;
