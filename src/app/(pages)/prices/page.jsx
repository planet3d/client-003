import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Prices = () => {
    return (
        <div>
            <section className="w-full mb-24">

                <div className="container mb-16 px-4 md:px-6">
                    <div className="space-y-6 text-center">
                        <h1 className="text-5xl font-extrabold">Our Service Pricing</h1>
                        <p className="text-muted-foreground">
                            Explore our flexible pricing options to find the perfect fit for your needs.
                        </p>
                    </div>
                </div>

                <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
                    <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-lg text-center">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold">Starter</h3>
                            <p className="text-muted-foreground">Perfect for individuals and small teams.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">$9</div>
                            <p className="text-muted-foreground">per month</p>
                        </div>
                        <div className="grid gap-2">
                            <Button size="lg">Get Started</Button>
                            <Link href="#" className="text-center text-sm text-muted-foreground" prefetch={false}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-4 rounded-lg border bg-gray-500/20 p-6 shadow-lg  text-center">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold">Pro</h3>
                            <p className="text-muted-foreground">Ideal for growing teams and businesses.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">$29</div>
                            <p className="text-muted-foreground">per month</p>
                        </div>
                        <div className="grid gap-2">
                            <Button variant="default" size="lg">Get Started</Button>
                            <Link href="#" className="text-center text-sm text-muted-foreground" prefetch={false}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-lg text-center">
                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold">Enterprise</h3>
                            <p className="text-muted-foreground">Tailored for large organizations and teams.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold">$99</div>
                            <p className="text-muted-foreground">per month</p>
                        </div>
                        <div className="grid gap-2">
                            <Button size="lg">Get Started</Button>
                            <Link href="#" className="text-center text-sm text-muted-foreground" prefetch={false}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Prices