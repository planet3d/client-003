'use client'

import { useState } from 'react';
import { loginUser } from '@/services/strapi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear previous errors
        try {
            const response = await loginUser(identifier, password);
            console.log('User logged in:', response);
            // Redirect to the home page or another protected page
            router.push('/');
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        }
    };

    return (
        <div className='flex h-full justify-center items-center mb-32'>
            <Card className="max-w-md mx-auto mt-10 p-5 min-w-[360px]">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

                <div className='text-center my-8 text-muted-foreground'>Don't have an account? <Link className='font-bold hover:text-primary' href="/register">Register</Link></div>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Email or Username"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className="mb-4"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4"
                    />
                    <Button type="submit" className="w-full">Login</Button>
                </form>
                {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}

                <div className='text-center mt-4'><Link className='font-bold text-muted-foreground hover:text-primary' href="/forgotten-password">Forgot password?</Link></div>
            </Card>
        </div>
    );
};

export default Login;
