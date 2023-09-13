'use client';
import UsernameForm from '@components/UsernameForm'
import { useSearchParams } from 'next/navigation';

const editProfile = () => {
    const searchParam = useSearchParams();
    const id = searchParam.get('id');
    return (
        <div>
            <UsernameForm 
                userId={id}
            />
        </div>
    )
}

export default editProfile