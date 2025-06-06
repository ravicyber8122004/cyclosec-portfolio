import { IoMenu } from "react-icons/io5";
import { CompanyLogo} from "../pages";
import { PrimaryButton, SecondaryButton } from "./Buttons";

const navLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Platforms",
        href: "/"
    },
    {
        label: "Solutions",
        href: "/"
    },
    {
        label: "About",
        href: "/aboutus"
    },
    {
        label: "Contact",
        href: "/ContactUs"
    },
    {
        label: "Pricing",
        href: "/pricing"
    },
]


export default function Navbar() {
  return (
    <section className="py-2 lg:py-8 bg-background">
        <div className="w-full lg:max-w-[85%] lg:mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:px-2 mx-4 items-center">
                <div className="flex items-center gap-x-1">
                    <div>
                        <img className="h-8 pl-1 w-auto" src={CompanyLogo} alt="Cyclosec Logo" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Cyclosec</h3>
                    </div>
                </div>
                
                <div className="lg:flex items-center justify-center hidden">
                    <nav className="flex gap-5 font-medium text-white w-auto">
                        {navLinks.map(link => (
                            <a className="hover:text-PrimaryButtonBackground transition-all duration-150" href={link.href} key={link.label}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex justify-end gap-2">
                    <IoMenu className="md:hidden hover:cursor-pointer" size={25} color="white"/>
                    <SecondaryButton name="Sign Up"/>
                    <PrimaryButton name="Log In"/>
                </div>

            </div>
        </div>
    </section>    
  );
}
