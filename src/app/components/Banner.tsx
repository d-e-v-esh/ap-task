export const Banner = () => {
  return (
    <div className="z-banner flex w-full items-center justify-between bg-slate-800 px-4 py-2 laptop:justify-center laptop:py-3.5">
      <div className="flex laptop:items-center">
        <div className="mr-2 mt-0.5 h-4 w-4 shrink-0 rounded-full border border-white bg-red-600 laptop:mt-0"></div>
        <div className="text-sm text-white laptop:text-lg">
          <span className="">
            Just the right start to your New Year! Support Acharya Prashant's
            Work
          </span>
        </div>
      </div>

      <div className="shrink-0 pl-5 text-sm">
        <a
          className="flex items-center rounded-md border border-gray-200 px-2 py-1 text-white laptop:py-0.75"
          href="https://acharyaprashant.org/en/contribute/contribute-work?cmId=m00071">
          <span>Click Here</span>
        </a>
      </div>
    </div>
  );
};
