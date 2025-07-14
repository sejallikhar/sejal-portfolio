import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="violet" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let’s build something <span className="text-purple">remarkable</span> together.
        </h1>
        <p className="text-neutral-300 mt-6 mb-10 max-w-xl text-sm leading-relaxed">
          I&apos;m currently exploring full-time roles. If you&apos;re looking for a developer who brings both technical depth and product thinking — let&apos;s talk.
        </p>

        <a href="mailto:sejallikhar150@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
  
    </footer>
  );
};

export default Footer;
