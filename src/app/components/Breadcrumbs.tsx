import { MdArrowForwardIos } from "react-icons/md";
const BreadCrumb = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="hidden px-4 pt-4 tab:block laptop:px-8">
        <div className="flex w-full flex-wrap items-baseline justify-start text-gray-subtitle">
          <div className="mr-1 text-sm cursor-pointer hover:text-orange-600">
            <span className="font-en svelte-t3mcl">Home</span>
          </div>
          <div className="mr-1 px-1 text-gray-subtitle">
            <MdArrowForwardIos width={1} height={1} />
          </div>
          <div className="mr-1 text-sm font-medium">
            <span className="font-hi svelte-t3mcl">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
