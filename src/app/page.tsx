import CourseSection from "./components/CourseSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-screen-2xl">
      {/* Course Section */}
      <CourseSection />

      {/* FAQSection */}
      <FAQSection />
    </div>
  );
}
