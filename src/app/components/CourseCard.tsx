import React from "react";

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
  return (
    <div className="group flex cursor-pointer flex-col justify-between space-y-2 overflow-hidden px-4 pt-4 hover:bg-slate-100 laptop:rounded-lg laptop:hover:shadow">
      <div className="flex flex-col space-y-2">
        <div className="self-start pb-2">Bhag {order}</div>

        <div className="flex w-full flex-col text-left">
          <div>
            <div className="text-lg font-medium leading-normal text-gray-title">
              <span>{title}</span>
            </div>
            <div className="text-sm leading-normal text-gray-subtitle laptop:text-base">
              <span>{subtitle}</span>
            </div>
            <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm">
              <span className="font-en svelte-t3mcl">{courseHours}</span>
            </div>
            <div className="pt-1 text-xs text-gray-subtitle laptop:text-sm">
              <span>Contribution: {amount}</span>
              <del>
                <span className="pl-1">
                  <span>₹{originalAmount}</span>
                </span>
              </del>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap text-xs">
            <div className="mr-1">
              <div className="flex items-center rounded px-1.5 py-0.5 text-xs text-slate-700 bg-blue-background">
                <span>{language}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inline-flex items-center space-x-3 text-xs font-medium">
            <div
              id="main-website-add-to-cart-borderless-button"
              className="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-1r7fe4c">
              <span className="font-en svelte-t3mcl">ADD TO CART</span>
            </div>
            <div className="self-stretch py-2">
              <div className="h-full w-px bg-gray-separator"></div>
            </div>
            <div
              id="main-website-enroll-in-course-button"
              className="cursor-pointer rounded-md text-center transition-colors transition duration-150 btn-borderless btn-base svelte-1r7fe4c">
              <span className="font-en svelte-t3mcl">ENROL</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 group-hover:invisible">
        <div className="h-[0.5px] w-full bg-gray-400"></div>
      </div>
    </div>
  );
};

export default CourseCard;
