import Link from "next/link";
import NavLogo from "./NavLogo";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoCard } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-500/10 py-5 mt-5 text-muted-foreground py-12">
        <div
          className="flex flex-col gap-8 aos-init aos-animate"
          data-aos="fade-in"
        >
          <div className="flex justify-center gap-10 list-none">
          <IoLogoFacebook className="hover:text-primary cursor-pointer" size={30} />
          <IoLogoInstagram className="hover:text-primary cursor-pointer" size={30} />
          <IoLogoYoutube className="hover:text-primary cursor-pointer" size={30} />
          </div>
          <ul className="flex flex-col md:flex-row justify-center items-center list-none">
            <li className="nav-item">
              <Link
                href="/terms-and-conditions"
                className="px-2 uppercase"
              >
                Terms and Conditions
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/privacy-policy" className="px-2 uppercase">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq" className="px-2 uppercase">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="px-2 uppercase">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-2 list-none">
          <IoCard size={30} />
            <div>Safety Card Payment</div>
          </div>
          <p className="text-center text-xs">© 2024 MyCabinet</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
