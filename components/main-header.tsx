"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavigationMenus, { NavigationMenuProps } from "./menus";
import { Button } from "./ui/button";
import SiteLogo from "./ui/site-logo";

const Navbar = ({ menus, ctaprops, siteLogo }: NavigationMenuProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <header
      className={cn(
        "flex left-0 w-full z-20 items-center bg-blue-50 dark:bg-dark",
        pathname === "/" ? "absolute" : ""
      )}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <SiteLogo altText={siteLogo?.altText!} url={siteLogo?.sourceUrl!} />
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
              </button>
              <div className="md:relative w-full ">
                <NavigationMenus
                  classNames={cn(
                    "absolute z-30 sm:bg-blue-10  right-4 top-full w-full rounded-lg  px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent",
                    !open && "hidden"
                  )}
                  menus={menus}
                />
              </div>
            </div>
            <Button
              className="bg-blue-500 hidden hover:bg-blue-600 md:flex"
              asChild
            >
              <Link
                className="capitalize text-lg "
                href={ctaprops?.destination.uri!}
              >
                {ctaprops?.label}{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
