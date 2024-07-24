import { IoCubeOutline } from "react-icons/io5";
import Link from "next/link";

const NavLogo = () => {
    return (
        <Link href="/">
            <div className='text-md font-extrabold flex items-center text-primary'>
                <IoCubeOutline size={40} className="text-primary" />
                MyCabinet
            </div>
        </Link>
    )
}

export default NavLogo