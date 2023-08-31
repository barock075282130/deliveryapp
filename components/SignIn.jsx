'use client';
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SignIn = () => {
    const [ providers, setProviders ] = useState(null);
    const { data:session } = useSession();
    const userSignInCheck = session?.user?.id
    const router = useRouter();
    useEffect(() => {
        const setUpProviders = async() =>{
            const response = await getProviders()
            setProviders(response)
        }
    
        setUpProviders();
        if(userSignInCheck) router.push('/')
    }, [userSignInCheck]);
    return (
        <div className="flex justify-center items-center min-h-full">
                {providers &&
                    Object.values(providers).map((provider) => (
                    <span
                        key={provider.name}
                            onClick={() => {
                                signIn(provider.id);
                            }}
                        className="flex gap-1 hover:bg-green-100 hover:text-green-600 duration-300 rounded-lg py-2 px-5 cursor-pointer"
                        >
                        เข้าสู่ระบบ {provider.name}
                    </span>
                ))}
        </div>
    )
}

export default SignIn