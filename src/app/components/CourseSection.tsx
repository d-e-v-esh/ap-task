import axios from "axios";
import { CourseDescription } from "./CourseDescription";
import CourseCard from "./CourseCard";
import { Separator } from "@/components/ui/separator";

type Thumbnail = {
  id: string;
  version: number;
  domain: string;
  basePath: string;
  key: string;
  qualities: number[];
  aspectRatio: number;
};

type CourseDetails = {
  id: string;
  contentType: "CourseSeries";
  title: string;
  subtitle: string;
  description: string;
  language: string;
  thumbnail: Thumbnail;
  coursesCount: number;
  tagIds: number[];
};

type Course = {
  id: string;
  contentType: "Course";
  title: string;
  subtitle: string;
  language: string;
  amount: number;
  originalAmount: number;
  thumbnail: Thumbnail;
  series: {
    id: string;
    order: {
      seq: number;
    };
  };
  courseHours: number;
};

type ResponseType = {
  courses: Course[];
  details: CourseDetails;
};

const CourseSection = async () => {
  // @ts-ignore
  let courseDetails: CourseDetails = {};

  let courses: Course[] = [];
  const imageUrl =
    "https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/20/image.jpg";

  try {
    const response = await axios.get<ResponseType>(
      "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
    );
    console.log(response.data);
    courses = response.data.courses;
    courseDetails = response.data.details;
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <CourseDescription
        description={courseDetails.description}
        imageUrl={imageUrl}
        subtitle={courseDetails.subtitle}
        key={1}
        title={courseDetails.title}
      />

      <div className="px-4 laptop:px-8">
        <div>
          <div className="mt-8 text-lg font-medium tab:mt-12 tab:text-xl laptop:mt-16">
            <span>Video Series {`(${courseDetails.coursesCount})`}</span>
          </div>
          <Separator
            orientation="horizontal"
            className="mt-1 h-[0.5px] w-full bg-gray-300 tab:mt-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-4 tab:grid-cols-2 tab:gap-y-4 laptop:grid-cols-3 laptop:gap-x-8 laptop:px-4 desk:grid-cols-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            subtitle={course.subtitle}
            order={course.series.order.seq}
            language={course.language}
            originalAmount={course.originalAmount}
            amount={course.amount}
            courseHours={course.courseHours}
          />
        ))}
      </div>
    </>
  );
};

export default CourseSection;
