import Link from "next/link"

const Sidebar = ({ userData, pathName }) => {
    const userSide = [{
        links: '/addstock',
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
        name: 'เพิ่มพัสดุ'
    },{
        links: '/stocklist',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>,
        name: 'ข้อมูลพัสดุ'
    },{
        links: '/profile',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
        name: 'ข้อมูลส่วนตัว'
    }]
    const riderSide = [{
        links: '/stocklist',
        icons: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>,
        name: 'พัสดุที่รับ'
    },{
        links: '/profile',
        icons:  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>,
        name: 'ข้อมูลส่วนตัว'
    }]
    const active = 'bg-white text-orange-300 py-2 px-3 rounded-l-xl font-semibold text-lg ease-in-out duration-300'
    const notactive = 'bg-orange-300/50 py-2 px-3 rounded-l-xl ease-in-out duration-300'
    return (
        <aside className='fixed top-14 text-white w-16 md:w-40 h-screen bg-orange-400 select-none'>
            <ul className="mt-3 flex flex-col ml-2 gap-1">
                {userData?.role !== 'rider'&&(
                    <>
                        {userSide.map((sidebar)=>(
                            <li key={sidebar.name} className={pathName === sidebar.links ? active : notactive}>
                                <Link href={sidebar.links}>
                                    <span className="flex gap-2">
                                        {sidebar.icons}
                                        <p className="hidden md:block">{sidebar.name}</p>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </>
                )}
                {userData?.role === 'rider'&&(
                    <>
                        {riderSide.map((sidebar)=>(
                            <li className={pathName === sidebar.links ? active : notactive} key={sidebar.name}>
                                <Link href={sidebar.links}>
                                    <span className="flex justify-center md:justify-start gap-2">
                                        {sidebar.icons}
                                        <p className="hidden md:block">{sidebar.name}</p>
                                    </span>
                                </Link>
                            </li>
                        ))}
                        {userData?.permission === 'admin'&&(
                            <li className={pathName === '/admin' ? active : notactive}>
                                <Link href='/admin'>
                                    <span className="flex justify-center md:justify-start gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                        <p className="hidden md:block">ข้อมูลผู้ใช้งาน</p>
                                    </span>
                                </Link>
                            </li>
                        )}
                    </>
                )}
            </ul>
        </aside>
    )
}

export default Sidebar