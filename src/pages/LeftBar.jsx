import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
const JSIcon = require("../assets/JSIcon.png");
// const GitLogo = require("../assets/GitLogo.png");
const LinkedinLogo = require("../assets/LinkedinLogo.png");
const KaggleLogo = require("../assets/KaggleLogo.png");
const MailLogo = require("../assets/MailLogo.png");

export default function LeftBar() {
    const [showWebList, SetShowWebList] = useState(true);
    const [showProjectsList, SetShowProjectsList] = useState(true);

    const WebList = () => (
        <div>
          <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              />
              <p>First project</p>
            </div>
          </a>
          <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              />
              <p>Second Project</p>
            </div>
          </a>
        </div>
      );

      return (
        <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
          <div>
    
            <div
              //Projects list 
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowProjectsList(!showProjectsList)}
            > 

              {showProjectsList ? (
                <ChevronDownIcon className="w-7 mr-1" /> //if the project part is shown => down icon
              ) : (
                <ChevronRightIcon className="w-7 mr-1" /> //if not, left icon
              )}
              <p>Projects</p>
            </div>
    
            {showProjectsList ? (
              <>
                <div
                  //Projects list - sublist - web
                  className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                  onClick={() => SetShowWebList(!showWebList)}
                >
                  {showWebList ? (
                    <ChevronDownIcon className="w-7 mr-1  ml-5" />
                  ) : (
                    <ChevronRightIcon className="w-7 mr-1  ml-5" />
                  )}
    
                  <p>Web</p>
                </div>
                {showWebList ? <WebList /> : null}
              </>
            ) : null}
            <div className="absolute inset-x-0 bottom-10 ">
              <div className="flex px-6 space-x-7">
                {/* <a href="/">
                  <img
                    src={GitLogo}
                    alt="Git Logo"
                    className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                  />
                </a> */}
                <a href="/">
                  <img
                    src={KaggleLogo}
                    alt="Kaggle Logo"
                    className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                  />
                </a>
                <a href="/">
                  <img
                    src={LinkedinLogo}
                    alt="Linkedin Logo"
                    className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                  />
                </a>
                <a href="/">
                  <img
                    src={MailLogo}
                    alt="Mail Logo"
                    className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
}