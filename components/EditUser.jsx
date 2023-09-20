'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const EditUser = () => {
    const [ userData, setUserData ] = useState([]);
    const [ userUpdateRole, setUserUpdateRole ] = useState(null);
    const [ status, setStatus ] = useState(false);
    const router = useRouter();
    const searchParam = useSearchParams();
    const id = searchParam.get('id')
    const getUser = async() => {
        try {
            const getdata = await fetch(`/api/admin/user/${id}`,{
                method: "GET"
            })
            const dataJson = await getdata.json();
            setUserData(dataJson)
        } catch (error) {
            console.log(error)
        }
    }
    const handleUserRole = async(e) => {
        e.preventDefault();
        setStatus(true)
        try {
            const res = await fetch(`/api/admin/user/${id.toString()}`,{
                method:"PATCH",
                body: JSON.stringify({
                    role: userUpdateRole
                })
            })
            if(res.ok){
                router.push('/admin')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setStatus(false)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return (
        <div className="h-full flex items-center">
            <form onSubmit={handleUserRole} className="flex flex-col gap-4 shadow-xl shadow-orange-200 border-2 border-orange-400 rounded-lg p-5">
                {userData&& (
                    <div className="grid gap-2 text-lg">
                        <span>
                            ชื่อผู้ใช้ : {userData.username}
                        </span>
                        <span>
                            สถานะ : {userData.role === 'customer' ? 'ผู้ใช้งานทั่วไป': 'คนส่งพัสดุ'}
                        </span>
                        <select defaultValue='none' onChange={(e)=>setUserUpdateRole(e.target.value)} 
                            className="px-6 py-2 border rounded-lg justify-normal"
                        >
                            <option value='none' disabled='disabled'>เลือกสถานะ</option>
                            <option value='customer'>ผู้ใช้งานทั่วไป</option>
                            <option value='rider'>คนส่งพัสดุ</option>
                        </select>
                    </div>
                )}
                <div className="grid gap-1">
                    <button className="green_button" disabled={status}>
                        {status ? 'กำลังอัพเดทข้อมูล...':'ยืนยัน'}
                    </button>
                        <Link href='/admin' className="gray_button text-center">
                            ย้อนกลับ
                        </Link>
                </div>
            </form>
        </div>
    )
}

export default EditUser