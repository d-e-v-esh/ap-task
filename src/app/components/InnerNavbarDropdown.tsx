import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Tag {
  name: {
    hindi: string;
    english: string;
  };
  tagId: number;
  parent: number;
  level: number;
  hasChildren: boolean;
}

type APIResponse = Tag[][];

type menuItem = {
  itemName: {
    hindi: string;
    english: string;
  };
  tag: number;
  subItem: subItem[];
};

type subItem = {
  subItemName: { hindi: string; english: string };
  tag: number;
};

const InnerNavbarDropdown = async () => {
  const menuItems: menuItem[] = [];

  const isEnglish = true;

  try {
    const response = await axios.get<APIResponse>(
      "https://api.acharyaprashant.org/v2/legacy/courses/tags"
    );

    const itemData = response.data[0];
    const subItemData = response.data[1];

    for (let i = 0; i < itemData.length; i++) {
      menuItems[i] = {
        tag: itemData[i].tagId,
        itemName: {
          english: itemData[i].name.english,
          hindi: itemData[i].name.hindi,
        },
        subItem: [],
      };
    }

    for (let i = 0; i < subItemData.length; i++) {
      menuItems[subItemData[i].parent - 1].subItem.push({
        subItemName: {
          english: subItemData[i].name.english,
          hindi: subItemData[i].name.hindi,
        },
        tag: subItemData[i].tagId,
      });
    }
  } catch (error) {
    console.error(error);
  }

  const renderSubItems = (subItems: subItem[]) => (
    <DropdownMenuPortal>
      <DropdownMenuSubContent>
        {subItems.map((subItem, index) => (
          <DropdownMenuItem key={index}>
            {isEnglish
              ? subItem.subItemName.english
              : subItem.subItemName.hindi}
          </DropdownMenuItem>
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuPortal>
  );
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <div className="px-2">All</div>
            <IoMdArrowDropdown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {menuItems.map((menuItem, index) => (
            <DropdownMenuGroup key={index}>
              {menuItem.subItem.length > 0 ? (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {isEnglish
                      ? menuItem.itemName.english
                      : menuItem.itemName.hindi}
                  </DropdownMenuSubTrigger>
                  {renderSubItems(menuItem.subItem)}
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem>
                  {isEnglish
                    ? menuItem.itemName.english
                    : menuItem.itemName.hindi}
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
            </DropdownMenuGroup>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InnerNavbarDropdown;
