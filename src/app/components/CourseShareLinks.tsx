"use client";

import { FaFacebookF, FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CourseShareLinks = () => {
  return (
    <div>
      <div className="hidden pt-4 tab:block">
        <div className="flex flex-col items-center tab:items-start">
          <div className="pb-3 text-sm font-medium text-gray-title tab:pb-1">
            <span>Share this series</span>
            <span className="invisible tab:visible">:</span>
          </div>
          <div className="w-full px-8 tab:px-0 tab:mt-2 tab:-ml-1.5">
            <div className="flex w-full justify-center tab:justify-start space-x-7">
              <a className="px-1.5 group" href="#">
                <FaFacebookF
                  color="#3E6FA7"
                  className="h-6 w-6 group-hover:hidden"
                />
                <FaFacebook
                  color="#3E6FA7"
                  className="h-6 w-6 hidden group-hover:block"
                />
              </a>

              <a
                className="px-1.5 group"
                href="http://twitter.com/intent/tweet?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3&text=%0A&hashtags=AcharyaPrashant,VideoSeries,wisdom,spirituality">
                {/* Twitter */}

                <FaTwitter
                  color="#08BBEE"
                  className="h-6 w-6 group-hover:hidden"
                />
                <AiFillTwitterCircle
                  color="#08BBEE"
                  className="h-6 w-6 hidden group-hover:block"
                />
              </a>

              <a
                className="px-1.5 group"
                href="https://wa.me/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fvideo-modules%2Fseries%2Fcourse-series-eeb9d3">
                <FaWhatsapp
                  color="#06BA27"
                  className="h-6 w-6 group-hover:hidden"
                />
                <FaWhatsappSquare
                  color="#06BA27"
                  className="h-6 w-6 hidden group-hover:block"
                />
              </a>

              <a
                className="px-1.5 group"
                href="https://www.linkedin.com/shareArticle/?url=https://acharyaprashant.org/en/video-modules/series/course-series-eeb9d3">
                {/* Linkedin */}

                <FaLinkedinIn
                  color="#0A66C2"
                  className="h-6 w-6 group-hover:hidden"
                />
                <FaLinkedin
                  color="#0A66C2"
                  className="h-6 w-6 hidden group-hover:block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseShareLinks;
