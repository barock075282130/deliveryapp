import React from 'react'

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
                <button className="green_button">{confirm ? `กำลัง${type}พัสดุ...` : `${type}พัสดุ`}</button>
            </form>
        </div>
    )
}

export default StockForm