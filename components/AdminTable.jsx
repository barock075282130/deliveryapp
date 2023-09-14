'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminTable = () => {
    const { data:session } = useSession();
    const permission = session?.user?.id?.permission
    const router = useRouter();
    const [ user, setUser ] = useState([]);
    const userData = async() => {
        try {
            const res = await fetch('/api/admin/user',{
                method: "GET"
            })
            const dataJson = await res.json();
            setUser(dataJson)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(permission !== 'admin') router.push('/')
        userData();
    },[permission])
  return (
        <table className='w-screen text-white'>
            <thead  className="w-full bg-gray-600">
                <tr>
                    <th scope='col' className="py-2">อีเมล์</th>
                    <th scope='col'>ชื่อ-นามสกุล</th>
                    <th scope='col'>สถานะ</th>
                    <th scope='col'>ตั้งค่า</th>
                    <th scope='col'>ลบข้อมูล</th>
                </tr>
            </thead>
            <tbody className='text-center bg-gray-400'>
                {user&&user.map((u)=>(
                    <tr key={u._id}>
                        <th scope='row'>{u.email}</th>
                        <td>{u.username}</td>
                        <td>{u.role}</td>
                        <td>ตั้งค่า</td>
                        <td>ลบข้อมูล</td>
                    </tr>
                ))}
            </tbody>
        </table>
  )
}

export default AdminTable