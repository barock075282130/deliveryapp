import Link from "next/link"

const StockForm = ({
    type,
    info,
    setInfo,
    addStockButton,
    confirm,
}) => {
    return (
        <div className="grid gap-3 place-items-center my-5">
            <span className="text-2xl font-semibold">{type}พัสดุ</span>
            <form onSubmit={addStockButton}>
                <div className="grid grid-cols-2 gap-x-6">
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ชื่อ-นามสกุล</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, username: e.target.value })}
                            value={info.username}
                            placeholder="ชื่อ-นามสกุล"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">เบอร์โทรศัพท์</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, userPhone: e.target.value })}
                            value={info.userPhone}
                            placeholder="เบอร์โทรศัพท์"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ชื่อผู้รับ</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, receiverName: e.target.value })}
                            value={info.receiverName}
                            placeholder="ชื่อผู้รับ"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">เบอร์โทรศัพท์ผู้รับ</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, receiverPhone: e.target.value })}
                            value={info.receiverPhone}
                            placeholder="เบอร์โทรศัพท์ผู้รับ"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ประเภทของพัสดุ</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, title: e.target.value })}
                            value={info.title}
                            placeholder="ประเภทของ"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ที่อยู่ผู้ส่งพัสดุ</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, receiveFrom: e.target.value })}
                            value={info.receiveFrom}
                            placeholder="ที่อยู่ผู้ส่งพัสดุ"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ที่อยู่ผู้รับพัสดุ</label>
                        <input 
                            type="text" 
                            className="border"
                            onChange={(e)=>setInfo({ ...info, sendTo: e.target.value })}
                            value={info.sendTo}
                            placeholder="ที่อยู่ผู้รับพัสดุ"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="ml-2 block mb-1">ข้อมูลพัสดุ</label>
                        <textarea 
                            cols="30" 
                            rows="5"
                            className="resize-none border"
                            onChange={(e)=>setInfo({ ...info, packageInfo: e.target.value })}
                            value={info.packageInfo}
                            placeholder="ข้อมูลพัสดุ"
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="green_button">{confirm ? `กำลัง${type}พัสดุ...` : `${type}พัสดุ`}</button>
                    <Link href='/'>
                        <button className="gray_button">ยกเลิก</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default StockForm