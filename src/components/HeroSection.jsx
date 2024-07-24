import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <div>
            <section className="w-full h-full my-40">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-[900px]">
                        <div className="flex flex-col justify-center space-y-8">
                            <div className="space-y-8">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Design Cabinets & <br /> Submit Cutting Lists with Ease
                                </h1>
                                <p className="text-muted-foreground md:text-xl">
                                    Our cutting-edge cabinet design and cutting list submission tool makes it simple to create custom
                                    cabinets and share your cutting lists with manufacturers.
                                </p>
                            </div>
                            <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
                                <Button
                                    href="#"
                                    size="xl"
                                    className=""
                                    prefetch={false}
                                >
                                    Design Cabinets
                                </Button>
                                <Button
                                    variant="outline"
                                    href="#"
                                    size="xl"
                                    className=""
                                    prefetch={false}
                                >
                                    Submit Cutting List
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSection