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
                    <div>
                        <section className="p-6 grid grid-cols-2">
                            <div className="font-semibold text-6xl grid place-items-center">
                                <span className="text-center">
                                    <p>Delivery App</p>
                                    <p className="text-xl mt-2 text-end">easy app for delivery in your province</p>
                                </span>
                            </div>
                            <Image 
                                src='/deliverybike1.jpg'
                                alt="dklnmfvoaf"
                                width={600}
                                height={600}
                            />
                        </section>
                    </div>
                ):(
                    userDataRole&&userDataRole?.role === 'rider'?(
                        <div className="ml-16 duration-300 md:ml-40">
                            <Rider 
                                userDataRole={userDataRole}
                            />
                        </div>
                    ):(
                        <div>
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