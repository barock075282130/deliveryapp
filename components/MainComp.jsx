'use client';
import { useSession } from "next-auth/react";
import Rider from "./Rider";
import Customer from "./Customer";
import Image from "next/image";

const MainComp = () => {
    const { data:session } = useSession();
    const userDataRole = session?.user?.id
    return (
        <>
            <div>
                {!session?.user ? (
                    <>
                        <div className="font-semibold text-6xl absolute top-56 left-20">
                            <p>Delivery App</p>
                            <p className="text-xl mt-2 text-end">easy app for delivery in province</p>
                        </div>
                        <Image 
                            src='/deliverybike1.jpg'
                            alt="dklnmfvoaf"
                            width={600}
                            height={600}
                            className="absolute bottom-2 right-5"
                        />
                    </>
                ):(
                    userDataRole&&userDataRole?.role === 'rider'?(
                        <div className="ml-16 duration-300 md:ml-40">
                            <Rider />
                        </div>
                    ):(
                        <div className="ml-16 duration-300 md:ml-40">
                            <Customer 
                                userDataRole={userDataRole}
                            />
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default MainComp