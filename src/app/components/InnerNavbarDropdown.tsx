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
import { IoMdArrowDropdown } from "react-icons/io";

export function InnerNavbarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <div className="px-2">All</div>
          <IoMdArrowDropdown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* Vedant */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Upanishads</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Ishavasya Upanishad</DropdownMenuItem>
                <DropdownMenuItem>Shwetashvtara Upanishad</DropdownMenuItem>
                <DropdownMenuItem>Kathopnishad</DropdownMenuItem>
                <DropdownMenuItem>Niralamba Upanishad</DropdownMenuItem>
                <DropdownMenuItem>Sarvasara Upanishad</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Bhagavad Gita</DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Other Scriptures */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Other Scriptures</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Paramahansa Gita</DropdownMenuItem>
                <DropdownMenuItem>Ribhu Gita</DropdownMenuItem>
                <DropdownMenuItem>Ajgar Gita</DropdownMenuItem>
                <DropdownMenuItem>Ashtavakra Gita</DropdownMenuItem>
                <DropdownMenuItem>Uttara Gita</DropdownMenuItem>
                <DropdownMenuItem>Jivanmukta Gita</DropdownMenuItem>
                <DropdownMenuItem>Putra Gita</DropdownMenuItem>
                <DropdownMenuItem>Avadhuta Gita</DropdownMenuItem>
                <DropdownMenuItem>Pingla Gita</DropdownMenuItem>
                <DropdownMenuItem>Yog Vashisth</DropdownMenuItem>
                <DropdownMenuItem>Shri Ramcharitra Manas</DropdownMenuItem>
                <DropdownMenuItem>Vivekachudamani</DropdownMenuItem>
                <DropdownMenuItem>Tatva Bodh</DropdownMenuItem>
                <DropdownMenuItem>Atma Bodh</DropdownMenuItem>
                <DropdownMenuItem>Vairagya Shatkam</DropdownMenuItem>
                <DropdownMenuItem>Shringar Shatkam</DropdownMenuItem>
                <DropdownMenuItem>Mahabharat</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Saints and Masters */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Saints and Masters</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Meera Bai</DropdownMenuItem>
                <DropdownMenuItem>Saint Kabir</DropdownMenuItem>
                <DropdownMenuItem>Saint Raidas</DropdownMenuItem>
                <DropdownMenuItem>Saint Dariyadas</DropdownMenuItem>
                <DropdownMenuItem>Saint Sahjobai</DropdownMenuItem>
                <DropdownMenuItem>Saint Lalleshwari</DropdownMenuItem>
                <DropdownMenuItem>Saint Rahim</DropdownMenuItem>
                <DropdownMenuItem>Adi Shankaracharya</DropdownMenuItem>
                <DropdownMenuItem>Saint Surdas</DropdownMenuItem>
                <DropdownMenuItem>Tulsidas</DropdownMenuItem>
                <DropdownMenuItem>Saint Namdev</DropdownMenuItem>
                <DropdownMenuItem>Saint Dadu Dayal</DropdownMenuItem>
                <DropdownMenuItem>Guru Nanak</DropdownMenuItem>
                <DropdownMenuItem>Baba Bulleh Shah</DropdownMenuItem>
                <DropdownMenuItem>Shree Patanjali</DropdownMenuItem>
                <DropdownMenuItem>Swami Vivekananda</DropdownMenuItem>
                <DropdownMenuItem>Shri Krishna</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Other Streams */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Other Streams</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Zen</DropdownMenuItem>
                <DropdownMenuItem>Buddhism</DropdownMenuItem>
                <DropdownMenuItem>Sikhism</DropdownMenuItem>
                <DropdownMenuItem>Panchatantra</DropdownMenuItem>
                <DropdownMenuItem>Jesus</DropdownMenuItem>
                <DropdownMenuItem>Christianity</DropdownMenuItem>
                <DropdownMenuItem>Sufism</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Life Questions */}
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Life Questions</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Relationships</DropdownMenuItem>
                <DropdownMenuItem>Career and Job</DropdownMenuItem>
                <DropdownMenuItem>Overthinking and loneliness</DropdownMenuItem>
                <DropdownMenuItem>Depression and Anxiety</DropdownMenuItem>
                <DropdownMenuItem>Women Liberation</DropdownMenuItem>
                <DropdownMenuItem>Patriotism</DropdownMenuItem>
                <DropdownMenuItem>Study and Education</DropdownMenuItem>
                <DropdownMenuItem>India</DropdownMenuItem>
                <DropdownMenuItem>Meditation</DropdownMenuItem>
                <DropdownMenuItem>Environment</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
