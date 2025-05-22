import LoginForm from '@/components/modules/auth/login/LoginForm';
import React from 'react';

const page = () => {
    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <LoginForm></LoginForm>
        </div>
    );
};

export default page;