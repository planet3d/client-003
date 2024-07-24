"use client"

import * as React from "react"
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation";

export function AuthToggle() {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleNavigation = (path) => {
        router.push(path);
        setIsOpen(false); // Close the menu after navigation
    };

    /*const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };*/

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="sajatLink"
                    size="icon"
                    //onMouseEnter={handleMouseEnter}
                    //onMouseLeave={handleMouseLeave}
                >
                    <FaRegUser />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                //onMouseEnter={handleMouseEnter}
                //onMouseLeave={handleMouseLeave}
            >
                <DropdownMenuItem onClick={() => handleNavigation('/login')}>
                    Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation('/register')}>
                    Register
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
