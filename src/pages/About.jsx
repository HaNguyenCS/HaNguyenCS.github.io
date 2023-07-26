import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";


const ReactLogo = require("../assets/ReactLogo.png");
const PythonLogo = require("../assets/PythonLogo.png");
const JsLogo = require("../assets/JsLogo.png");
const TailwindLogo = require("../assets/TailwindLogo.png");
const SqlLogo = require("../assets/SqlLogo.png");
const NodeJSLogo = require("../assets/NodeJSLogo.png");
const Java = require("../assets/java.png");
const C = require("../assets/C.png");
const html = require("../assets/html.png");




export default function About() {
    return (
        <div
          id="About"
          //mt: margin top; mx: horizontal margin (mx-size)
          className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
        >
          <div>
            <div className="table">
              <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
              <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                About Me
              </code>
              <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5">
              <code style = {{fontfamily: 'Courier New'}}>
              I am going to third-year honours <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}>
              Computer Science (CO-OP) </code>, and pursuing a Minor in Economics at  
              <a rel="nofollow" href="https://www.mcmaster.ca/" target="_blank" style={{color: '#676767'}}> McMaster University</a>. 
              I am a studious and passionate person with
              <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}> Front-end</code> web development experience, 
              and the ability to use 
              <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}> Java, Python, and JavaScript for coding and Figma for UI/UX desgin</code>.
              I am searching for coop opportunities 
              (4 - 8 - 12 months) starting spring/ summer 2024. 
              I am always eager to learn new things as well as look for challenges to improve my skills,
              so please reach out to me if you would love to connect!
              </code>
              <br /><br />
    
              <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                My Skills
              </code>

              <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">

                <div className="flex flex-row  mb-3">
                  <img
                    src={PythonLogo}
                    alt="Python Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>Python</code>
                </div>

                <div className="flex flex-row  mb-3">
                  <img
                    src={JsLogo}
                    alt="Js Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>JavaScript</code>
                </div>
                
                <div className="flex flex-row mb-3">
                  <img
                    src={Java}
                    alt="Java logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>Java</code>
                </div>

                <div className="flex flex-row mb-3">
                  <img
                    src={C}
                    alt="C Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>C</code>
                </div>

                <div className="flex flex-row mb-3">
                  <img
                    src={html}
                    alt="html Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>HTML5</code>
                </div>
                
                <div className="flex flex-row mb-3">
                  <img
                    src={ReactLogo}
                    alt="React Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>React</code>
                </div>
                
                <div className="flex flex-row  mb-3">
                  <img
                    src={TailwindLogo}
                    alt="Tailwind Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>Tailwind CSS</code>
                </div>
                
                <div className="flex flex-row mb-3">
                  <img
                    src={NodeJSLogo}
                    alt="NodeJS Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>Nodejs</code>
                </div>
                <div className="flex flex-row mb-3">
                  <img
                    src={SqlLogo}
                    alt="SQL Logo"
                    className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
                  />
                  <code>SQL</code>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
}