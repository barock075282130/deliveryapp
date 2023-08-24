'use client';

import { useState } from "react";

const UsernameForm = ({ data }) => {
    const [ name, setName ] = useState('');
    const [ submit, setSubmit ] = useState(false);
    const getName = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    const submitName = async() => {
        setSubmit(true)
        try {
            const res = await fetch(`/api/customer/${data._id.toString()}/nameform`,{
                method: "PATCH",
                body: JSON.stringify({
                    username: name
                })
            }) 
            if(res.ok){
                window.location.reload(false)
            }
        } catch (error) {
            console.log('input error')
        } finally {
            setSubmit(false)
        }
    }
    return (
        <div>
            <form onSubmit={submitName} className="flex flex-col gap-3">
                <p className="text-center">ชื่อ-นามสกุล</p>
                <input 
                    type="text" 
                    onChange={getName} 
                    value={name} 
                    className="border border-gray-300 rounded-lg w-96 px-3 py-2"
                />
                <button className="blue_button">
                    {submit ? 'กำลังอัพเดท...' : 'ยืนยัน'}
                </button>
            </form>
        </div>
    )
}

export default UsernameForm