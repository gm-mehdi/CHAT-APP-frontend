import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

interface UserSignupProps {
    fullname: string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

const UserSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullname, username, password, confirmPassword, gender }:UserSignupProps) => {
        const success = handleInputError({ fullname, username, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('http://localhost:8000/api/auth/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullname, username, password, confirmPassword, gender}),
            });
            const data = await res.json();
            console.log("Response from the backend");
            console.log(data);

            if(data.error){
                throw new Error(data.error);
            }

            //localStorage
            localStorage.setItem("chat-user", JSON.stringify(data));

            //context
            setAuthUser(data);
        } catch (error :any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading };
};

export default UserSignup

function handleInputError({ fullname, username, password, confirmPassword, gender }: UserSignupProps) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all the field')
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false;
    }

    if (password.length < 6) {
        toast.error('Passwords must be at least 6 characters')
        return false;
    }

    return true;
}