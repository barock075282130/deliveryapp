'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const UserProfile = () => {
    const { data:session } = useSession();
    const userId = session?.user?.id
    const router = useRouter();
    const [ profile, setProfile ] = useState([]);
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
        if(!userId) router.push('/')
        if(userId) getProfileId();
    },[userId])
    const profileData = [{
        title: 'ชื่อ-นามสกุล',
        info: profile.name,
    },{
        title: 'อีเมล์',
        info: profile.email,
    },{
        title: 'เบอร์โทรศัพท์',
        info: profile.phone,
    },{
        title: 'ที่อยู่',
        info: profile.address,
    },{
        title: 'จังหวัด',
        info: profile.province,
    },{
        title: 'รหัสไปรษณีย์',
        info: profile.postcode,
    }]        
    return (
        <div className="border-2 flex h-fit p-6 rounded-lg shadow-xl my-5">
            <div className="text-center">
                <header>ข้อมูลส่วนตัว</header>
                <div className="text-start my-5">
                    {profileData.map((profileinfo)=>(
                        <div className="grid grid-cols-2 gap-5" key={profileinfo.title}>
                            <span>{profileinfo.title}</span>
                            <p>{profileinfo.info}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-start">
                    <button onClick={()=>editProfile(profile.id)} className="blue_button">แก้ไขข้อมูลส่วนตัว</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile