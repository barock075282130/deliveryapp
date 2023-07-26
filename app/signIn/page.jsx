'use client';

import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

const Login = () => {
    const [ providers, setProviders ] = useState(null);
    useEffect(() => {
        const setUpProviders = async() =>{
            const response = await getProviders()
            setProviders(response)
        }
    
        setUpProviders();
    }, []);
    return (
        <div>{providers &&
            Object.values(providers).map((provider) => (
              <span
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="flex gap-1 hover:bg-green-100 hover:text-green-600 duration-300 rounded-lg py-2 px-5 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                เข้าสู่ระบบ {provider.name}
              </span>
            ))}</div>
    )
}

export default Login