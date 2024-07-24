'use client'

// pages/register.jsx
import { useState } from 'react';
import { registerUser } from '@/services/strapi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear previous errors
        try {
            const response = await registerUser(username, email, password);
            console.log('User registered:', response);
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);
        }
    };

    return (
        <div className='flex h-full justify-center items-center mb-24'>
            <Card className="max-w-md mx-auto mt-10 p-5 min-w-[360px]">
                <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

                <div className='text-center my-8 text-muted-foreground'>Already have an account? <Link className='font-bold hover:text-primary' href="/login">Log In</Link></div>

                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-4"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4"
                    />
                    <Button type="submit" className="w-full">Register</Button>
                </form>
                {error && <p className="text-red-500 mt-4 text-center text-sm">{error}</p>}

                

                <div className='text-center mt-4'><Link className='font-bold text-muted-foreground' href="/forgotten-password">Forgot password?</Link></div>

                <p class="p-8 text-center text-sm text-muted-foreground">By clicking continue, you agree to our <Link class="underline underline-offset-4 hover:text-primary" href="/terms">Terms of Service</Link> and <Link class="underline underline-offset-4 hover:text-primary" href="/privacy">Privacy Policy</Link>.</p>
            </Card>
        </div>
    );
};

export default Register;
