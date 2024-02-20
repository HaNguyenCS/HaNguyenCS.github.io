import React, { useState } from "react";
import tw from "tailwind-styled-components";
// import { XIcon } from "@heroicons/react/solid";
import { DocumentIcon, HomeIcon, IdentificationIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/JSIcon.png");
const HTMLIcon = require("../assets/html.png");


export default function NavBar({ showPage, setShowPage }) {
    const [hidePage, setHidePage] = useState([]);

    return (
        <div className="flex flex-row h-full" style ={{position: 'sticky'}}>
            {showPage === "home" ? (
                <ActiveContainer
                onClick={() => {
                    setShowPage("home");
                }}
                >
                <HomeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                Home.js
                </ActiveContainer>
            ) : (
                <Container
                onClick={() => {
                    setShowPage("home");
                }}
                >
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  text-yellow_vs"
                />
                Home.js
                </Container>
            )}
            {hidePage.includes("about") ? null : showPage === "about" ? (
                <ActiveContainer
                onClick={() => {
                    setShowPage("about");
                }}
                >
                <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                About.js
                </ActiveContainer>
            ) : (
                <Container
                onClick={() => {
                    setShowPage("about");
                }}
                >
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  text-yellow_vs"
                />
                About.js
                </Container>
            )}
            {hidePage.includes("resume") ? null : showPage === "resume" ? (
                <ActiveContainer
                onClick={() => {
                    setShowPage("resume");
                }}
                >
                <DocumentIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                Resume.js
                </ActiveContainer>
            ) : (
                <Container
                onClick={() => {
                    setShowPage("resume");
                }}
                >
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  text-yellow_vs"
                />
                Resume.js
                </Container>
            )}
            {hidePage.includes("projects") ? null : showPage === "projects" ? (
                <ActiveContainer
                onClick={() => {
                    setShowPage("projects");
                }}
                >
                <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
                Projects.js
                </ActiveContainer>
            ) : (
                <Container
                onClick={() => {
                    setShowPage("projects");
                }}
                >
                <img src={JSIcon} alt="JS Icon" className="w-7 mr-1 text-yellow_vs" />
                Projects.js
                {/* <XIcon
                    className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                    onClick={(e) => {
                    e.stopPropagation();
                    setShowPage("home");
                    setHidePage(prevState=>[...prevState, "contact"]);
                    console.log(hidePage);

                    }}
                /> */}
                </Container>
            )}
        </div>
    )
}

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

