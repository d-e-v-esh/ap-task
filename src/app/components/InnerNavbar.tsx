import { Button } from "@/components/ui/button";
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import InnerNavbarDropdown from "./InnerNavbarDropdown";
import Image from "next/image";
import videoSeries from "../../img/ic_videoseries.png";
import Link from "next/link";

export const InnerNavbar = () => {
  return (
    <div className="sticky top-0 z-30 bg-white shadow">
      <div className="mx-auto max-w-screen-2xl select-none">
        <div className="h-12">
          <div className="flex h-full w-full items-center justify-between">
            <div className="flex cursor-pointer items-center justify-center pl-4 laptop:pl-8">
              <div className="laptop:block">
                <Image
                  className="h-6 object-contain"
                  src={videoSeries}
                  width={90}
                  height={50}
                  alt="Video Series"
                />
              </div>

              <div className="ml-6 hidden w-[36rem] flex-grow tab:block">
                <div className="items-center rounded border border-gray-disabled shadow-sm">
                  <div className="relative">
                    <div className="relative flex w-full flex-row">
                      <InnerNavbarDropdown />

                      <Input
                        className="focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none caret-orange-600"
                        placeholder="Search for video series"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        type="submit"
                        className="bg-orange-200">
                        <IoSearch className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-10 content-center items-center justify-center space-x-4 pr-4 laptop:pr-12">
              <Button
                asChild
                className="cursor-pointer w-14 h-8 rounded-md text-center transition-colors duration-150 bg-orange-500 hover:bg-orange-600">
                <Link href="https://acharyaprashant.org/en/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
