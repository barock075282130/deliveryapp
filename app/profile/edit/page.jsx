'use client';

import UsernameForm from '@components/UsernameForm'
import { useSearchParams } from 'next/navigation';

const editProfile = () => {
    const searchParam = useSearchParams();
    const userIdParam = searchParam.get('id');
    return (
        <div>
            <UsernameForm 
                userId={userIdParam}
            />
        </div>
    )
}

export default editProfile