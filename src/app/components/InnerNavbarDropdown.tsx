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
  item: string;
  subItem: string[];
};

const InnerNavbarDropdown = async () => {
  const menuItems: menuItem[] = [];

  try {
    const response = await axios.get<APIResponse>(
      "https://api.acharyaprashant.org/v2/legacy/courses/tags"
    );

    const itemData = response.data[0];
    const subItemData = response.data[1];

    for (let i = 0; i < itemData.length; i++) {
      menuItems[i] = { item: itemData[i].name.english, subItem: [] };
    }

    for (let i = 0; i < subItemData.length; i++) {
      menuItems[subItemData[i].parent - 1].subItem.push(
        subItemData[i].name.english
      );
    }
  } catch (error) {
    console.error(error);
  }

  const renderSubItems = (subItems: string[]) => (
    <DropdownMenuPortal>
      <DropdownMenuSubContent>
        {subItems.map((subItem, index) => (
          <DropdownMenuItem key={index}>{subItem}</DropdownMenuItem>
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
                    {menuItem.item}
                  </DropdownMenuSubTrigger>
                  {renderSubItems(menuItem.subItem)}
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem>{menuItem.item}</DropdownMenuItem>
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
