import Modal from "@components/Modal";

const StockTable = ({ role, updatePackage, done, packageInfo, editPackage, deletePackage, status, handleViewPackage }) => {
    const deleteType =  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
    return (
        <>
        <header className="flex justify-center font-semibold text-4xl my-4">ตารางพัสดุ</header>
        <table className="w-full text-white table-fixed">
            <thead>
                <tr className="border bg-gray-700">
                    <th scope="col" className="py-2">{role === 'rider' ? 'ชื่อผู้ส่ง':'ประเภทของพัสดุ'}</th>
                    <th scope="col">{role === 'rider' ? 'เบอร์โทรศัพท์':'ข้อมูลพัสดุ'}</th>
                    <th scope="col" className="w-24">ดูข้อมูล</th>
                    {role !== 'rider'&&(
                        <>
                            <th scope="col" className="w-24">แก้ไข</th>
                            <th scope="col" className="w-24">ลบข้อมูล</th>
                        </>
                    )}
                    {role === 'rider'&&(
                        <>
                            <th scope="col">สถานะ</th>
                        </>
                    )}
                </tr>
            </thead>
            <tbody className="text-center">
                {packageInfo && packageInfo.length > 0 ? packageInfo.map((data)=>(
                    <tr key={data._id} className="border bg-gray-400">
                        <th scope="row" className="py-2 ">{role === 'rider' ? data.username : data.title}</th>
                        <td>{role === 'rider' ? data.userPhone : data.packageInfo}</td>
                        <td>
                            <span
                                className="cursor-pointer text-white font-semibold flex justify-center"
                                onClick={()=>handleViewPackage(data._id)}
                            >
                                <p className="bg-blue-600 py-2 w-full hover:bg-blue-100 hover:text-blue-600 duration-200">
                                    ดูข้อมูล
                                </p>
                            </span>
                        </td>
                        {role !== 'rider'&&(
                            <>
                                <td>
                                    <span
                                        className="cursor-pointer text-white font-semibold flex justify-center"
                                        onClick={()=>editPackage(data._id)}
                                    >
                                        <p className="bg-gray-600 py-2 w-full hover:bg-gray-100 hover:text-black duration-200">
                                            แก้ไข
                                        </p>
                                    </span>
                                </td>
                                <td>
                                    <Modal 
                                        type={deleteType}
                                        title='ลบ'
                                        handleFunction={()=>deletePackage(data._id)}
                                        status={status}
                                    />
                                </td>
                            </>
                        )}
                        {role === 'rider'&&(
                            <>
                                <td>
                                    <button
                                        className="bg-green-600 p-2 flex justify-center w-full"
                                        onClick={()=>updatePackage(data._id)}
                                        disabled={done}
                                    >
                                        {done ? 'กำลังอัพเดท...' : 'เสร็จสิ้น'}
                                    </button>
                                </td>
                            </>
                        )}
                    </tr>
                )):(
                    <tr className="border bg-gray-400">
                        <th scope="row" className="py-2 ">ไม่มีข้อมูล</th>
                        <td>ไม่มีข้อมูล</td>
                        <td>ไม่มีข้อมูล</td>
                        {role !== 'rider'&&(
                            <>
                                <td>ไม่มีข้อมูล</td>
                                <td>ไม่มีข้อมูล</td>
                            </>
                        )}
                        {role === 'rider'&&(
                            <>
                                <td>ไม่มีข้อมูล</td>
                            </>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
        </>
    )
}

export default StockTable