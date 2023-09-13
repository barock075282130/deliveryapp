'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const UserProfile = () => {
    const { data:session } = useSession();
    const userId = session?.user?.id
    const router = useRouter();
    const [ profile, setProfile ] = useState(null);
    const editProfile = (id) => router.push(`/profile/edit?id=${id}`)
    const getProfileId = async() => {
        try {
            const getId = await fetch(`/api/profile/${userId?._id}`,{
                method: "GET"
            })
            const data = await getId.json();
            setProfile(data)
        } catch (error) {
            console.log('fetch error')
        }
    }
    useEffect(()=>{
        if(userId) getProfileId();
    },[userId])
    return (
        <div className="text-center">
            <header>ข้อมูลส่วนตัว</header>
            <div className="text-start my-5">
                {profile&&
                    <> 
                        <div className="grid grid-cols-2 gap-5">
                            <span>ชื่อ-นามสกุล</span>
                            <p>{profile.name}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <span>อีเมล์</span>
                            <p>{profile.email}</p>
                        </div>
                    </>
                }
            </div>
            <div className="flex justify-start">
                <button onClick={()=>editProfile(profile.id)}>แก้ไขข้อมูลส่วนตัว</button>
            </div>
        </div>
    )
}

export default UserProfile