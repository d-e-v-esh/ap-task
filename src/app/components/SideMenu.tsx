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
    { title: "AP Circle", link: "" },

    { title: "Invite For Talk", link: "" },
    { title: "Invite For an Interview", link: "" },
    { title: "Contact Us", link: "" },
    { title: "Careers", link: "" },
    { title: "Donate", link: "" },
  ];

  const moreItems = [
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
    { title: "Technical Support", link: "" },
  ];

  const Section = ({ children }: { children: React.ReactNode }) => {
    return <div className="my-5">{children}</div>;
  };

  const Subtitle = ({ children }: { children: string }) => {
    return <div className="p-4">{children}</div>;
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <RxHamburgerMenu className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="w-[500px] sm:w-[540px]">
          <ScrollArea className="flex flex-col h-screen w-full">
            <SheetTitle>Login</SheetTitle>
            <Separator />
            <Section>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  className="justify-start w-full"
                  variant="ghost"
                  asChild>
                  <Link href={item.link}>{item.title}</Link>
                </Button>
              ))}
            </Section>
            <Separator />
            <Subtitle>MORE</Subtitle>

            <Section>
              {moreItems.map((item, index) => (
                <Button
                  key={index}
                  className="justify-start w-full"
                  variant="ghost"
                  asChild>
                  <Link href={item.link}>{item.title}</Link>
                </Button>
              ))}
            </Section>

            <Separator />
            <Subtitle>EXPLORE CATEGORIES</Subtitle>

            <Section>
              {exploreItems.map((item, index) => (
                <Button
                  key={index}
                  className="justify-start w-full"
                  variant="ghost"
                  asChild>
                  <Link href={item.link}>{item.title}</Link>
                </Button>
              ))}
            </Section>

            <div className="h-8" />
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;
