"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FiPhone } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import HeadIcon from "../../img/ic_favicon.png";

type NavItem = {
  label: string;
  link: string;
  icon?: React.ReactNode;
  subItems?: NavItem[];
};

export const Navbar = () => {
  const leftNavItems: NavItem[] = [
    { label: "Home", link: "https://acharyaprashant.org/" },
    {
      label: "Live Sessions",
      link: "#",
      subItems: [
        { label: "Bhagavad Gita", link: "https://acharyaprashant.org/en/gita" },
        {
          label: "Sant Sarita",
          link: "https://acharyaprashant.org/en/sant-sarita",
        },
        {
          label: "Vedanta Samhita",
          link: "https://acharyaprashant.org/en/vedant-samhita",
        },
        {
          label: "Bodh Pratyusha",
          link: "https://acharyaprashant.org/en/bodh-pratyusha",
        },
      ],
    },
    { label: "Video Series", link: "https://acharyaprashant.org/en/courses" },
    { label: "AP Books", link: "https://acharyaprashant.org/en/books" },
    { label: "AP Articles", link: "https://acharyaprashant.org/en/articles" },
    {
      label: "Invite",
      link: "#",
      subItems: [
        {
          label: "For a talk",
          link: "https://acharyaprashant.org/en/invite?tIn=0",
        },
        {
          label: "For an interview",
          link: "https://acharyaprashant.org/en/invite?tIn=1",
        },
      ],
    },
    { label: "In Media", link: "https://acharyaprashant.org/en/media" },
    { label: "Careers", link: "https://acharyaprashant.org/en/hiring" },
    { label: "Donate", link: "https://acharyaprashant.org/en/contribute" },
  ];

  const rightNavItems: NavItem[] = [
    {
      label: "EN",
      link: "#",
      subItems: [
        { label: "Hindi", link: "#" },
        { label: "English", link: "#" },
      ],
    },
    {
      label: "Contact",
      link: "https://acharyaprashant.org/en/enquiry",
      icon: <FiPhone className="w-5 h-5" />,
    },
    { label: "Menu", link: "#", icon: <RxHamburgerMenu className="w-5 h-5" /> },
  ];

  return (
    <div className="h-12 z-40 bg-orange-600">
      <div className="mx-auto h-full max-w-screen-2xl select-none text-white bg-orange-600">
        <div className="flex h-full justify-between text-xs">
          <div className="flex items-stretch pl-4 text-sm laptop:pl-8">
            <div className="shrink-0 self-center">
              <Image
                src={HeadIcon}
                className="mr-2 h-8 w-8 rounded-full"
                alt="Picture of the author"
              />
            </div>
            <NavSide navItems={leftNavItems} />
          </div>
          <div className="flex h-full content-center items-center justify-center laptop:mt-[1px] laptop:pr-8">
            <NavSide navItems={rightNavItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavSide = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <div className="hidden h-full flex-row items-stretch justify-center font-medium tab:flex">
      {navItems.map((item, index) => (
        <NavigationMenu className="w-36">
          <NavigationMenuList>
            <NavItemComponent key={index} item={item} />
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </div>
  );
};

const NavItemComponent = ({ item }: { item: NavItem }) => {
  return (
    <NavigationMenuItem className="text-white-opacity-90 flex cursor-pointer items-center space-x-1 whitespace-nowrap transition-opacity duration-300 ease-in-out hover:opacity-100 tab:px-1.5 laptop:px-2.5 desk:px-4">
      {item.subItems ? (
        <>
          <NavigationMenuTrigger className="bg-orange-600 hover:bg-orange-300 hover:text-white">
            {item.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {item.subItems.map((subItem, index) => (
              <Link key={index} href={subItem.link} legacyBehavior passHref>
                <ListItem title={subItem.label} href={subItem.link} />
              </Link>
            ))}
          </NavigationMenuContent>
        </>
      ) : (
        <Link href={item.link} legacyBehavior passHref>
          {item.icon ? (
            <div className="">
              <NavigationMenuLink>{item.icon}</NavigationMenuLink>
            </div>
          ) : (
            <NavigationMenuLink>{item.label}</NavigationMenuLink>
          )}
        </Link>
      )}
    </NavigationMenuItem>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <ul>
      <li>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="text-sm font-medium leading-none">{title}</div>
        </NavigationMenuLink>
      </li>
    </ul>
  );
});

export default Navbar;
