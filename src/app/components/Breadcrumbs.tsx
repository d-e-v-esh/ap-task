import { MdArrowForwardIos } from "react-icons/md";
import { devanagari } from "../layout";

const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="hidden px-4 pt-4 tab:block laptop:px-8">
        <div className="flex w-full flex-wrap items-baseline justify-start text-gray-700">
          <div className="mr-1 text-sm cursor-pointer hover:text-orange-600">
            <span>Home</span>
          </div>
          <div className="mr-1 px-1 text-gray-subtitle">
            <MdArrowForwardIos className="w-3" />
          </div>
          <div className="mr-1 text-sm font-medium">
            <span className={devanagari.className}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
