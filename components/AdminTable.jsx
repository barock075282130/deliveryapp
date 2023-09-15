'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserInfo = ({ 
    user,
    editUser,
}) => {
    return (
        <>
            {user&&user.map((u)=>(
                <tr key={u._id}>
                    <th scope='row'>{u.email}</th>
                    <td>{u.username}</td>
                    <td>{u.role === 'customer' ? 'ผู้ใช้งานทั่วไป':'คนส่งพัสดุ'}</td>
                    <td>
                        <button onClick={()=>editUser(u._id)}>แก้ไข</button>
                    </td>
                    <td>ลบข้อมูล</td>
                </tr>
            ))}
        </>
    )
}

const AdminTable = () => {
    const { data:session } = useSession();
    const permission = session?.user?.id?.permission
    const router = useRouter();
    const [ user, setUser ] = useState([]);
    const editUser = (id) => router.push(`/admin/edituser?id=${id}`)
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
    <div className='ml-16 md:ml-40 px-5 text-white'>
        <table className="w-full">
            <thead  className="bg-gray-600">
                <tr>
                    <th scope='col' className="py-2">อีเมล์</th>
                    <th scope='col'>ชื่อ-นามสกุล</th>
                    <th scope='col'>สถานะ</th>
                    <th scope='col'>ตั้งค่า</th>
                    <th scope='col'>ลบข้อมูล</th>
                </tr>
            </thead>
            <tbody className='text-center bg-gray-400'>
                <UserInfo
                    user={user}
                    editUser={editUser}
                />
            </tbody>
        </table>
    </div>  
  )
}

export default AdminTable