/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import ArrowRight from "@/assets/arrow-right.svg";
// import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";
import { MenuIcon, Moon, Sun, X } from "lucide-react";

export const Navbar: any = (props: any) => {
  const { theme, toggleTheme } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [navMenuState, setNavMenuState] = useState(false);
  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
    setNavMenuState(!navMenuState);
  };

  return (
    <>
      <header className="fixed top-0 backdrop-blur-sm w-full bg-black/80 z-20">
        {/* <div className="flex bg-black text-sm py-3 text-white justify-center gap-3">
          <p className="text-white/60  hidden md:block">
            Streamline your workflow and boost your productivity
          </p>
          <div className="inline-flex gap-1 items-center">
            <p> Get started for free</p> */}
        {/* <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" /> */}
        {/* </div>
        </div> */}
        <div className="py-1 ">
          <div className="nav-container dark:bg-transparent">
            <div className="m-5 flex items-center justify-end">
              {/* <img src={Logo} alt="Saas Logo" height={40} width={40} /> */}
              <div className="flex flex-row gap-2 items-end">
                <button
                  className="lg:hidden btn btn-primary"
                  onClick={toggleNavMenu}
                ></button>
                <div
                  onClick={toggleNavMenu}
                  className="hover:ring-4 ring-[#222]/50 "
                >
                  {!navMenuState && (
                    <MenuIcon className="h-5 w-5 md:hidden  dark:text-white transition-transform duration-1000" />
                  )}
                </div>
                <nav className="hidden bg-[#EAEEFE] dark:bg-transparent dark:dark md:bg-transparent md:h-fit md:flex md:flex-row md:top-0 md:relative gap-6 text-black/60 dark:text-white/80 items-center">
                  <a
                    href="#"
                    className=" hover:text-black/80 dark:hover:text-gray-100"
                  >
                    About
                  </a>
                  <a
                    href="#product"
                    className=" hover:text-black/80 dark:hover:text-gray-100"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    className=" hover:text-black/80 dark:hover:text-gray-100"
                  >
                    Pricing
                  </a>
                  <a
                    href="#testimonials"
                    className=" hover:text-black/80 dark:hover:text-gray-100"
                  >
                    Customers
                  </a>

                  <a
                    href="#footer"
                    className="hover:text-black/80 dark:hover:text-gray-100"
                  >
                    Help
                  </a>
                  <button className="btn btn-primary">Get Started</button>

                  <button
                    onClick={toggleTheme}
                    className="hover:text-black/80 hover:border hover:rounded-lg"
                  >
                    {theme === "dark" ? (
                      <Sun className="text-white" />
                    ) : (
                      <Moon className="text-black" />
                    )}
                  </button>
                </nav>
              </div>
            </div>
            <div />
          </div>
        </div>
      </header>
      <div>
        <div
          className={`md:hidden fixed z-30 top-0 h-full w-full bg-[#EAEEFE] dark:bg-black transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-[100rem]"
          }`}
        >
          <div className="flex items-center justify-between py-5 mx-4">
            {/* <img src={Logo} alt="Saas Logo" height={40} width={40} /> */}
            <X
              onClick={toggleNavMenu}
              className="h-6 w-6 md:hidden hover:ring-4 ring-[#222]/50  dark:text-white"
            />
          </div>
          <ul className="mt-10 space-y-4 flex flex-col items-center justify-center  text-black/60 dark:bg-black dark:text-white text-2xl">
            <li className="px-4 py-2">
              <a
                href="#"
                className=" hover:text-black/80 dark:hover:text-white/60 "
                onClick={toggleNavMenu}
              >
                About
              </a>
            </li>
            <li className="px-4 py-2 ">
              <a
                href="#product"
                className=" hover:text-black/80 dark:hover:text-white/60"
                onClick={toggleNavMenu}
              >
                Features
              </a>
            </li>

            <li className="px-4 py-2 ">
              <a
                href="#pricing"
                className=" hover:text-black/80 dark:hover:text-white/60"
                onClick={toggleNavMenu}
              >
                Pricing
              </a>
            </li>
            <li className="px-4 py-2">
              <a
                href="#testimonials"
                className=" hover:text-black/80 dark:hover:text-white/60"
                onClick={toggleNavMenu}
              >
                Customers
              </a>{" "}
            </li>
            <li className="px-4 py-2 ">
              <a
                href="#footer"
                className="hover:text-black/80 dark:hover:text-white/60"
                onClick={toggleNavMenu}
              >
                Help
              </a>
            </li>
            <li className="px-4 py-2 ">
              <button className="btn btn-primary" onClick={toggleNavMenu}>
                Get Started
              </button>
            </li>
            <li className="px-4 py-2">
              <a onClick={toggleTheme} className="hover:text-black/80">
                {theme === "dark" ? (
                  <Sun className="text-white" />
                ) : (
                  <Moon className="text-black" />
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
