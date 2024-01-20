"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

type MenuItem = {
  title: string;
  link: string;
};

const SideMenu: React.FC = () => {
  const menuItems = [
    { title: "Bhagavad Gita", link: "" },
    { title: "Sant Sarita", link: "" },
    { title: "Vedant Samhita", link: "" },
    { title: "Bodh Pratyusha", link: "" },
    { title: "AP Books", link: "" },
    { title: "AP Articles", link: "" },
    { title: "Video Series", link: "" },
    { title: "Invite For an Interview", link: "" },
    { title: "Contact Us", link: "" },
    { title: "Careers", link: "" },
    { title: "Donate", link: "" },
  ];

  const moreItems = [
    { title: "Technical Support", link: "" },
    { title: "PrashantAdvait Foundation", link: "" },
    { title: "Ghar Ghar Upanishad", link: "" },
    { title: "About Acharya Prashant", link: "" },
  ];

  const exploreItems = [
    { title: "Vedant - Upanishads", link: "" },
    { title: "Vedant - Bhagavad Gita", link: "" },
    { title: "Other Scriptures", link: "" },
    { title: "Saints and Masters", link: "" },
    { title: "Other Streams", link: "" },
    { title: "Life Questions", link: "" },
  ];

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <ScrollArea className="flex flex-col h-screen w-full">
            <SheetTitle>Login</SheetTitle>
            <Separator />

            {menuItems.map((item, index) => (
              <Button
                key={index}
                className="justify-start w-full"
                variant="ghost"
                asChild>
                <Link href={item.link}>{item.title}</Link>
              </Button>
            ))}

            <Separator />
            <SheetTitle>MORE</SheetTitle>
            {moreItems.map((item, index) => (
              <Button
                key={index}
                className="justify-start w-full"
                variant="ghost"
                asChild>
                <Link href={item.link}>{item.title}</Link>
              </Button>
            ))}

            <Separator />
            <SheetTitle>EXPLORE CATEGORIES</SheetTitle>
            {exploreItems.map((item, index) => (
              <Button
                key={index}
                className="justify-start w-full"
                variant="ghost"
                asChild>
                <Link href={item.link}>{item.title}</Link>
              </Button>
            ))}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;
