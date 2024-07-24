'use client'

import { useState } from 'react';
import { requestPasswordReset } from '@/services/strapi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const ForgottenPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            const response = await requestPasswordReset(email);
            setMessage('Password reset email sent. Please check your inbox.');
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        }
    };

    return (
        <div className='flex h-full justify-center items-center'>
            <Card className="max-w-md mx-auto mt-10 p-5 min-w-[360px]">
                <h1 className="text-2xl font-bold mb-4 text-center">Forgotten Password</h1>

                <div className='text-center my-8 text-muted-foreground'>Remember your password? <Link className='font-bold hover:text-primary' href="/login">Log In</Link></div>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4"
                    />
                    <Button type="submit" className="w-full">Request Password Reset</Button>
                </form>
                {message && <p className="text-green-500 mt-4 text-center text-sm">{message}</p>}
                {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}
            </Card>
        </div>
    );
};

export default ForgottenPassword;
