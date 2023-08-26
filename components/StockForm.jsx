import Link from "next/link"

const StockForm = ({
    type,
    info,
    setInfo,
    addStockButton,
    confirm,
}) => {
    return (
        <div>
            <span>{type}พัสดุ</span>
            <form className="grid gap-2" onSubmit={addStockButton}>
                <label>ชื่อ-นามสกุล</label>
                <input 
                    type="text" 
                    className="border"
                    onChange={(e)=>setInfo({ ...info, username: e.target.value })}
                    value={info.username}
                />
                <label>หัวข้อ</label>
                <input 
                    type="text" 
                    className="border"
                    onChange={(e)=>setInfo({ ...info, title: e.target.value })}
                    value={info.title}
                />
                <label>ที่อยู่รับพัสดุ</label>
                <input 
                    type="text" 
                    className="border"
                    onChange={(e)=>setInfo({ ...info, receiveFrom: e.target.value })}
                    value={info.receiveFrom}
                />
                <label>ที่อยู่จัดส่งพัสดุ</label>
                <input 
                    type="text" 
                    className="border"
                    onChange={(e)=>setInfo({ ...info, sendTo: e.target.value })}
                    value={info.sendTo}
                />
                <label>ข้อมูลพัสดุ</label>
                <textarea 
                    cols="30" 
                    rows="5"
                    className="resize-none border"
                    onChange={(e)=>setInfo({ ...info, packageInfo: e.target.value })}
                    value={info.packageInfo}
                ></textarea>
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