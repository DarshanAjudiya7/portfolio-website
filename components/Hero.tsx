"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("darshanajudiya07@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            {/* Dynamic Web Magic with Next.js */}
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Dynamic Web Magic with Next.js"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Darshan Ajudiya, a Full-stack Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <div className="flex items-center gap-6 pt-6">
            <a
              href="https://github.com/DarshanAjudiya7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-purple transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-ajudiya-a5b301310/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-purple transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
            <button
              id="copy-email-hero"
              aria-label="Copy email address"
              onClick={handleCopy}
              className="text-white hover:text-purple transition-colors text-2xl relative"
            >
              <FaEnvelope />
              {copied && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-black-200 text-white px-2 py-1 rounded whitespace-nowrap border border-white-100/20">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
