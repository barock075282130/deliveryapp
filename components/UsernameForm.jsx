'use client';

import { useEffect, useState } from "react";

const UsernameForm = ({ userId }) => {
    const [ name, setName ] = useState({
        username: '',
        address: '',
        province: '',
        postcode: '',
        phone: '',
    });
    const [ submit, setSubmit ] = useState(false);
    const getUser = async() => {
        try {
            const user = await fetch(`/api/customer/${userId.toString()}`,{
                method: "GET"
            })
            const dataJson = await user.json();
            console.log(dataJson)
            setName(dataJson)
        } catch (error) {
            console.log('fetch data error')
        }
    }
    const submitName = async() => {
        setSubmit(true)
        try {
            const res = await fetch(`/api/customer/${userId.toString()}/nameform`,{
                method: "PATCH",
                body: JSON.stringify({
                    username: name.username,
                    address: name.address,
                    province: name.province,
                    postcode: name.postcode,
                    phone: name.phone,
                    register: true
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
    const userData = [{
        title: 'ชื่อ-นามสกุล',
        setFucn: (e)=>setName({ ...name, username: e.target.value }),
        value: name.username,
    },{
        title: 'ที่อยู่',
        setFucn: (e)=>setName({ ...name, address: e.target.value }),
        value: name.address,
    },{
        title: 'จังหวัด',
        setFucn: (e)=>setName({ ...name, province: e.target.value }),
        value: name.province,
    },{
        title: 'รหัสไปรษณีย์',
        setFucn: (e)=>setName({ ...name, postcode: e.target.value }),
        value: name.postcode,
    },{
        title: 'เบอร์โทรศัพท์',
        setFucn: (e)=>setName({ ...name, phone: e.target.value }),
        value: name.phone,
    }]
    useEffect(()=>{
        getUser();
    },[])
    return (
        <div>
            <form onSubmit={submitName} className="grid w-96 gap-3">
                {userData&&userData.map((data)=>(
                        <div className="grid place-items-start gap-3" key={data.title}>
                            <p className="text-center">{data.title}</p>
                            <input 
                                type="text" 
                                onChange={data.setFucn} 
                                value={data.value} 
                                className="border border-gray-300 rounded-lg px-3 py-2"
                                placeholder={`${data.title}...`}
                            />
                        </div>
                ))}
                <button className="blue_button">
                    {submit ? 'กำลังอัพเดท...' : 'ยืนยัน'}
                </button>
            </form>
        </div>
    )
}

export default UsernameForm