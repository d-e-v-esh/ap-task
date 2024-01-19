import React from "react";
import { devanagari } from "../layout";
import { BiSolidTagAlt } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type CourseCardProps = {
  title: string;
  order: number;
  subtitle: string;
  courseHours: number;
  amount: number;
  originalAmount: number;
  language: string;
};

const CourseCard = ({
  title,
  order,
  subtitle,
  courseHours,
  amount,
  originalAmount,
  language,
}: CourseCardProps) => {
  const duration = courseHours;

  return (
    <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
      <div className="flex flex-col space-y-2">
        <div className="self-start pb-2">
          <div className="w-12 h-6 bg-slate-400  flex justify-center items-center rounded-lg">
            <span className={cn("text-white text-xs", devanagari.className)}>
              भाग {order}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col text-left">
          <div>
            <div className="text-lg font-medium leading-normal text-gray-title">
              <span className={devanagari.className}>{title}</span>
            </div>
            <div className="text-sm leading-normal text-gray-600 laptop:text-base">
              <span className={devanagari.className}>{subtitle}</span>
            </div>
            <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm">
              <span>{courseHours}</span>
            </div>
            <div className="pt-1 text-xs text-gray-600 laptop:text-sm">
              <span>Contribution: ₹{amount}</span>
              <del>
                <span className="pl-3">
                  <span>₹{originalAmount}</span>
                </span>
              </del>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap text-xs">
            <div className="mr-1">
              <div className="flex items-center rounded px-1.5 py-0.5 text-xs text-slate-700 bg-blue-200">
                {language === "hindi" ? (
                  <span>Hindi</span>
                ) : (
                  <span>English</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center space-x-3 text-xs font-medium">
            <div
              id="main-website-add-to-cart-borderless-button"
              className="cursor-pointer rounded-md text-center transition-colors transition duration-150">
              <span className="text-orange-600 hover:text-orange-800">
                ADD TO CART
              </span>
            </div>
            <div className="self-stretch py-2">
              <Separator orientation="vertical" className="bg-gray-300 h-3" />
            </div>
            <div
              id="main-website-enroll-in-course-button"
              className="cursor-pointer rounded-md text-center transition-colors transition duration-150">
              <span className="text-orange-600  hover:text-orange-800">
                ENROL
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 group-hover:invisible">
        <Separator orientation="horizontal" className="bg-gray-300" />
      </div>
    </div>
  );
};

export default CourseCard;
