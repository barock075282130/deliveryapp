'use client';
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="grid">
            <p className="text-center text-2xl font-semibold">เข้าสู่ระบบ</p>
            <div className="flex p-3 rounded-lg">
                    {providers &&
                        Object.values(providers).map((provider) => (
                        <span
                            key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                            className="flex gap-1 hover:bg-green-100 hover:text-green-600 duration-300 rounded-lg py-2 px-5 cursor-pointer"
                            >
                                {provider.name === 'Facebook' ? (
                                    <Image 
                                        src='/icons8-facebook-480.svg'
                                        alt="facebook"
                                        width={50}
                                        height={50}
                                    />
                                ):(
                                    <Image 
                                        src='/icons8-google-480.svg'
                                        alt="google"
                                        width={50}
                                        height={50}
                                    />
                                )}
                        </span>
                    ))}
            </div>
        </div>
    )
}

export default SignIn