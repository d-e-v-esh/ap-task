"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AccordionWrapper } from "./AccordionWrapper";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [faqData, setFaqData] = useState<FAQ[]>([]);
  useEffect(() => {
    axios
      .get<FAQ[]>(
        "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english"
      )
      .then((response) => {
        setFaqData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-slate-50 px-4 py-16 tab:px-4 laptop:px-20">
        <div className="tab:flex">
          <div className="pb-10 tab:w-1/3 tab:pb-0">
            <div>
              <div className="text-lg font-bold">FAQs</div>
              <div>
                Can&rsquo;t find the answer you&rsquo;re looking for? Reach out
                to our
                <Link
                  className="text-orange-500"
                  href="https://acharyaprashant.org/en/technical-support">
                  {` support `}
                </Link>
                team.
              </div>
            </div>
          </div>
          <div className="w-full tab:pl-24">
            <div>
              <Accordion type="single" collapsible>
                {faqData.map((faq, index) => (
                  <AccordionWrapper
                    key={index}
                    itemNumber={index + 1}
                    triggerText={faq.question}
                    contentText={faq.answer}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
