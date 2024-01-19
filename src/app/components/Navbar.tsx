"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import Link from "next/link"; // Ensure you import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className="h-12">
      <div className="mx-auto h-full max-w-screen-2xl select-none text-white bg-orange-600">
        <div className="flex h-full justify-between text-xs">
          <div className="flex items-stretch pl-4 text-sm laptop:pl-8">
            <Left />
          </div>
          <div className="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

const Left = () => {
  return (
    <div className="hidden h-full flex-row items-stretch justify-center font-medium tab:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Existing menu items... */}

          {/* Home */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link href="https://acharyaprashant.org/" legacyBehavior passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Live Sessions with sub-links */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <NavigationMenuTrigger className="relative flex items-center space-x-2">
              Live Sessions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link
                href="https://acharyaprashant.org/en/gita"
                legacyBehavior
                passHref>
                <NavigationMenuLink>Bhagavad Gita</NavigationMenuLink>
              </Link>
              <Link
                href="https://acharyaprashant.org/en/sant-sarita"
                legacyBehavior
                passHref>
                <NavigationMenuLink>Sant Sarita</NavigationMenuLink>
              </Link>
              <Link
                href="https://acharyaprashant.org/en/vedant-samhita"
                legacyBehavior
                passHref>
                <NavigationMenuLink>Vedanta Samhita</NavigationMenuLink>
              </Link>
              <Link
                href="https://acharyaprashant.org/en/bodh-pratyusha"
                legacyBehavior
                passHref>
                <NavigationMenuLink>Bodh Pratyusha</NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Video Series */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/courses"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                Video Series
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* AP Books */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/books"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                AP Books
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* AP Articles */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/articles"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                AP Articles
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Invite with sub-links */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <NavigationMenuTrigger>Invite</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Link
                href="https://acharyaprashant.org/en/invite?tIn=0"
                legacyBehavior
                passHref>
                <NavigationMenuLink>For a talk</NavigationMenuLink>
              </Link>
              <Link
                href="https://acharyaprashant.org/en/invite?tIn=1"
                legacyBehavior
                passHref>
                <NavigationMenuLink>For an interview</NavigationMenuLink>
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* In Media */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/media"
              legacyBehavior
              passHref>
              <NavigationMenuLink>In Media</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Careers */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/hiring"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                Careers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Donate */}
          <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            <Link
              href="https://acharyaprashant.org/en/contribute"
              legacyBehavior
              passHref>
              <NavigationMenuLink className="relative flex items-center space-x-2">
                Donate
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const Right = () => {
  return (
    <div className="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8">
      <NavigationMenu>
        <NavigationMenuList>
          <div className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
            {/* Language Dropdown */}
            <NavigationMenuItem className="ml-4">
              <NavigationMenuTrigger className="relative flex items-center space-x-2">
                Language
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Hindi</NavigationMenuLink>
                <NavigationMenuLink>English</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Phone */}
            <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className="relative flex items-center space-x-2">
                  <FiPhone />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Menu */}
            <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4 svelte-ay56ew">
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink className="relative flex items-center space-x-2">
                  <RxHamburgerMenu />
                  Menu
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
