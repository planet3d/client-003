import { ModeToggle } from "@/components/ModeToggle";
import { IoHomeSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { LuShoppingCart } from "react-icons/lu";
import { NavMenu } from "./NavMenu";
import { AuthToggle } from "./AuthToggle";
import NavLogo from "./NavLogo";

const Navbar = () => {
  return (
    <div className='container w-full flex justify-between items-center h-[100px]'>
      <NavLogo/>

      <div className="flex gap-8 items-center">
        <NavMenu />
      </div>

      <div className="flex gap-4 items-center">
        <ModeToggle />
        <div className="cursor-pointer">
          <LuShoppingCart />
        </div>
        <AuthToggle />
      </div>

    </div>
  )
}

export default Navbar