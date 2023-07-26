'use client';

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Nav = () => {
    const { data: session } = useSession();
    const pathName = usePathname()
  return (
    <nav>
        {session?.user ? (
            <span onClick={signOut} className="flex cursor-pointer bg-red-600 text-red-100 hover:bg-red-100 hover:text-red-600 rounded-lg py-2 px-3 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                ออกจากระบบ
            </span>
        ):(
            <>
            {pathName !== '/signIn'&&(
              <Link href='/signIn'>เข้าสู้ระบบ</Link>
            )}
            </>
        )}
    </nav>
  );
};

export default Nav;
