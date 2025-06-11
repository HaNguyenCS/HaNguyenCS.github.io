import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Image } from 'primereact/image';
const JSIcon = require("../assets/JSIcon.png");
const GitLogo = require("../assets/GitLogo.png");
const LinkedinLogo = require("../assets/LinkedinLogo.png");
const KaggleLogo = require("../assets/KaggleLogo.png");
const MailLogo = require("../assets/MailLogo.png");
const ProfilePic = require("../assets/profileNew.jpeg")

export default function LeftBar() {
    const [showWebList, SetShowWebList] = useState(true);
    const [showWebList2, SetShowWebList2] = useState(true);
    const [showProjectsList, SetShowProjectsList] = useState(true);
    // const icon = (<i className="pi pi-check"></i>)

    const WebList = () => (
        <div>
          <a target='_blank' href="https://www.coursera.org/account/accomplishments/certificate/AVA8A928KW8K">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              {/* <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              /> */}
              <p >Supervised Machine Learning: Regression and Classification </p>
            </div>
          </a>
          <a target='_blank' href="https://docs.google.com/document/d/1RDwB1dHocX3rkgItujD5xbEaY3yBULq9KtNV7zO_zFs/edit?usp=sharing">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              <p >(See my notes here!) </p>
            </div>
          </a>
          {/* <a target='_blank' href="http://103.130.212.35:1289/TTNhac/auth/login/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              />
              <p>Music Center Management</p>
            </div>
          </a> */}
          {/* <a target='_blank' href="https://learn.microsoft.com/api/credentials/share/en-us/ThanhHaNguyen-4527/C5A93C4F22604EBE?sharingId=A8D73735CD1FEEA2">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              />
              <p>Power BI</p>
            </div>
          </a> */}
        </div>
      );
      
      const WebList2 = () => (
        <div>
          <a target='_blank' href="https://learn.microsoft.com/api/credentials/share/en-us/ThanhHaNguyen-4527/C5A93C4F22604EBE?sharingId=A8D73735CD1FEEA2">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
              {/* <img
                src={JSIcon}
                alt="JS Icon"
                className="w-7 mr-1  ml-5 text-yellow_vs"
              /> */}
              <p>Power BI Data Analyst</p>
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
              <p>Certifications</p>
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
    
                  <p>Coursera</p>
                </div>

                {showWebList ? <WebList /> : null}

                <div
                  //Projects list - sublist - web
                  className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                  onClick={() => SetShowWebList2(!showWebList2)}
                >
                  {showWebList2 ? (
                    <ChevronDownIcon className="w-7 mr-1  ml-5" />
                  ) : (
                    <ChevronRightIcon className="w-7 mr-1  ml-5" />
                  )}
    
                  <p>Microsoft</p>
                </div>
              
                {showWebList2 ? <WebList2 /> : null}

              </>
              
            ) : null}
            
            
            <div className="absolute inset-x-0 bottom-10 ">

                <div className="card flex justify-content-center px-6 ">
                    {/* <a href="/"> */}
                    <Image
                        src={ProfilePic}
                        alt="Profile Pic"
                        className="h-50 w-50"
                        imageStyle={{ objectFit: 'cover', width: '250px', height: '250px' }}
                        
                    />
                    {/* </a> */}
                </div>
                <br/>

                {/* <div className="flex px-6 space-x-7">
                    <a href="/">
                    <img
                        src={GitLogo}
                        alt="Git Logo"
                        className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                    />
                    </a>
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
                </div> */}
            </div>
          </div>
        </div>
      );
}