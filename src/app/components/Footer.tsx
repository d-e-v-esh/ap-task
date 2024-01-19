import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";
import Image from "next/image";
import HeadIcon from "../../img/ic_favicon.png";
import Link from "next/link";
import PlayStoreImage from "../../img/ic_googleplay.png";
import AppStoreImage from "../../img/ic_appstore.png";

const FooterTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-[13px] font-semibold text-slate-100">{children}</div>
);

const FooterLink = ({ text, link }: { text: string; link: string }) => (
  <a href={link} className="mb-2.5 text-slate-300 hover:text-orange-700">
    {text}
  </a>
);

const SocialMediaIcon = ({
  icon,
  url,
}: {
  icon: React.ReactNode;
  url: string;
}) => (
  <a href={url} className="text-slate-300 hover:text-orange-700">
    {icon}
  </a>
);

export const Footer = () => {
  return (
    <div className="bg-slate-900 px-4 pb-24 tab:px-0 tab:pb-7 tab:pt-10">
      <div className="text-md flex w-full flex-col space-y-5 px-4 pt-8 tab:flex-row tab:justify-center tab:space-x-4 tab:space-y-0 tab:pt-0 laptop:space-x-16">
        <FooterSection title="LIVE EVENT">
          <FooterLink
            text="Bhagavad Gita"
            link="https://acharyaprashant.org/en/gita"
          />
          <FooterLink
            text="Sant Sarita"
            link="https://acharyaprashant.org/en/sant-sarita"
          />
          <FooterLink
            text="Vedant Samhita"
            link="https://acharyaprashant.org/en/vedant-samhita"
          />
          <FooterLink
            text="Bodh Pratyusha"
            link="https://acharyaprashant.org/en/bodh-pratyusha"
          />
        </FooterSection>

        <FooterSection title="WISDOM CONTENT">
          <FooterLink
            text="Video Series"
            link="https://acharyaprashant.org/en/video-modules"
          />
          <FooterLink
            text="AP Books"
            link="https://acharyaprashant.org/en/books"
          />
          <FooterLink
            text="AP Articles"
            link="https://acharyaprashant.org/en/articles"
          />
          <FooterLink
            text="AP Circle"
            link="https://acharyaprashant.org/en/circle"
          />
        </FooterSection>

        <FooterSection title="MORE">
          <FooterLink
            text="About Acharya Prashant"
            link="https://acharyaprashant.org/en/about"
          />
          <FooterLink
            text="Invite Him"
            link="https://acharyaprashant.org/en/invite?tIn=0"
          />
          <FooterLink
            text="Interview Him"
            link="https://acharyaprashant.org/en/invite?tIn=1"
          />
          <FooterLink
            text="Ghar Ghar Upanishad"
            link="https://acharyaprashant.org/en/vedant"
          />
          <FooterLink
            text="Media and Public Interaction"
            link="https://acharyaprashant.org/en/media"
          />
        </FooterSection>

        <FooterSection title="SOCIAL MEDIA">
          <SocialMediaLinks />
        </FooterSection>

        <FooterSection title="DOWNLOAD APP">
          <DownloadApp />
        </FooterSection>

        <FooterContactInfo />
      </div>

      <div className="mx-auto mb-6 mt-6 h-[0.5px] w-full bg-slate-400 tab:mt-[62px] tab:w-2/3"></div>
      <Copyright />
      <div className="pb-14"></div>
    </div>
  );
};

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <FooterTitle>{title}</FooterTitle>
    <div className="flex flex-col">{children}</div>
  </div>
);

const DownloadApp = () => {
  return (
    <div>
      <div className="mb-5 hidden items-center tab:flex">
        <Image className="mr-2 h-6 w-6" src={HeadIcon} alt="Acharya Prashant" />

        <div className="text-slate-100 laptop:whitespace-nowrap">
          <span>Acharya Prashant</span>
        </div>
      </div>
      <div className="flex tab:flex-col">
        <div className="mr-4 h-8 w-28 tab:mb-5 tab:mr-0 tab:w-[114px]">
          <Link href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks">
            <Image
              src={PlayStoreImage}
              alt="Play Store"
              className="rounded-md border-[1.4px] border-slate-300"
            />
          </Link>
        </div>

        <div className="h-8 w-28 tab:w-[114px]">
          <Link href="https://apps.apple.com/in/app/acharya-prashant/id1603611866">
            <Image
              src={AppStoreImage}
              alt="App Store"
              className="rounded-md border-[1.4px] border-slate-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SocialMediaLinks = () => (
  <>
    <div className="mb-6 flex flex-col">
      <div className="mb-2.5 text-slate-300">For English</div>
      <div className="flex space-x-2">
        <SocialMediaIcon
          icon={<FaYoutube />}
          url="https://www.youtube.com/c/AcharyaPrashant"
        />
        <SocialMediaIcon
          icon={<FaTwitter />}
          url="https://twitter.com/Prashant_Advait"
        />
        <SocialMediaIcon
          icon={<FaFacebookF />}
          url="https://www.facebook.com/AdvaitAcharyaPrashant"
        />
        <SocialMediaIcon
          icon={<FaInstagram />}
          url="https://www.instagram.com/acharya_prashant_paf/"
        />
        <SocialMediaIcon
          icon={<FaWikipediaW />}
          url="https://en.wikipedia.org/wiki/Acharya_Prashant"
        />
      </div>
    </div>
    <div className="mb-6 flex flex-col">
      <div className="mb-2.5 text-slate-300">For Hindi</div>
      <div className="flex space-x-2">
        <SocialMediaIcon
          icon={<FaYoutube />}
          url="https://www.youtube.com/c/ShriPrashant"
        />
        <SocialMediaIcon
          icon={<FaTwitter />}
          url="https://twitter.com/Advait_Prashant"
        />
        <SocialMediaIcon
          icon={<FaThreads />}
          url="https://www.threads.net/@acharya_prashant_ap"
        />
        <SocialMediaIcon
          icon={<FaFacebookF />}
          url="https://www.facebook.com/Acharya.Prashant.Advait"
        />
        <SocialMediaIcon
          icon={<FaInstagram />}
          url="https://www.instagram.com/acharya_prashant_ap/"
        />
      </div>
    </div>
  </>
);

const FooterContactInfo = () => (
  <div className="space-y-3 pt-2 tab:pt-0">
    <div className="mb-[13px] font-semibold text-slate-100">
      <span>CONTACT US</span>
    </div>
    <div className="mb-2.5 flex items-center">
      <div className="pr-2 text-slate-300">
        <LuMail />
      </div>
      <a
        href="mailto:support@advait.org.in"
        className="text-slate-300 hover:text-orange-700">
        support@advait.org.in
      </a>
    </div>
    <div className="mb-[13px] flex items-center">
      <div className="pr-2 text-slate-300">
        <FaWhatsapp />
      </div>
      <a
        href="https://wa.me/+919643750710"
        className="text-slate-300 hover:text-orange-700">
        +91 9643750710
      </a>
    </div>
    <div className="mb-5 flex items-center">
      <div className="pr-2 text-slate-300">
        <IoIosCall />
      </div>
      <a
        href="tel:+919650585100"
        className="text-slate-300 hover:text-orange-700">
        +91 9650585100
      </a>
    </div>
  </div>
);

const Copyright = () => (
  <div className="flex-col text-xs tab:mx-auto tab:flex tab:flex-row tab:justify-center tab:text-sm">
    <div className="text-slate-300 tab:pr-20">
      <span>Copyright © 2022 PrashantAdvait Foundation</span>
    </div>

    <div className="flex space-x-2 pt-2 tab:pt-0">
      <a
        href=""
        className="cursor-pointer text-slate-300 hover:text-orange-700">
        <span>Terms &amp; Conditions</span>
      </a>
      <div className="text-slate-300">|</div>
      <a
        href=""
        className="cursor-pointer text-slate-300 hover:text-orange-700">
        <span>Privacy Policy</span>
      </a>
      <div className="text-slate-300">|</div>
      <a
        href=""
        className="cursor-pointer text-slate-300 hover:text-orange-700">
        <span>Undertaking</span>
      </a>
    </div>
  </div>
);
