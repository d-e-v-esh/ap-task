"use client";

import Image from "next/image";
import BreadCrumb from "./Breadcrumbs";
import { useState } from "react";
import CourseShareLinks from "./CourseShareLinks";
import { devanagari } from "../layout";
import APSignature from "../../img/ic_apsignature_hindi.png";

type CourseDescriptionProps = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
};

export const CourseDescription = ({
  title,
  subtitle,
  description,
  imageUrl,
}: CourseDescriptionProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div>
      {/* BreadCrumb */}
      <BreadCrumb title={title} />

      {/* Heading */}
      <div className="flex items-center px-4 py-2 tab:py-4 tab:pt-4 laptop:px-8">
        <div className="text-lg font-semibold text-gray-600 tab:text-xl laptop:py-0 laptop:text-2xl py-1.5">
          <span className={devanagari.className}>{title}</span>
        </div>
      </div>

      {/* Description Body */}
      <div className="px-4 laptop:px-8">
        <div className="flex flex-col tab:flex-row tab:items-start">
          <div className="w-full shrink-0 tab:w-2/5">
            <div className="aspect-[16/9] w-full">
              {/* Image */}
              <div className="relative h-full w-full overflow-hidden rounded">
                <Image fill alt={title} src={imageUrl} />
                <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black align-bottom text-base font-semibold text-white" />
                <Image
                  className="absolute object-contain w-24 right-1 bottom-1"
                  src={APSignature}
                  alt="AP Name Logo"
                />
              </div>
            </div>

            <CourseShareLinks />
          </div>

          <div className="flex flex-col self-stretch pt-4 text-sm tab:pl-4 tab:pt-0 laptop:text-lg">
            <div className="text-lg font-medium text-gray-title laptop:text-xl">
              <span className={devanagari.className}>{subtitle}</span>
            </div>
            <div className="text-justify text-base text-gray-subtitle tab:pr-4">
              <div className="hidden tab:block">
                <span className={devanagari.className}>{description}</span>
              </div>
              <div className="block tab:hidden">
                <span className={devanagari.className}>
                  <span>
                    {isDescriptionExpanded
                      ? description
                      : `${description.slice(0, 160)}...`}
                  </span>
                </span>
                <button
                  onClick={toggleDescription}
                  className="cursor-pointer text-orange-600 hover:text-orange-800">
                  <span className={devanagari.className}>
                    {isDescriptionExpanded ? "  कम दिखाएं" : "  और पढ़ें"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
