import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
      <div
          id="projects"
          //mt: margin top; mx: horizontal margin (mx-size)
          className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
        >
          <div>
            <div className="table">
              <AcademicCapIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
              <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                Projects
              </code>
              <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
            </div>

            <div className="text-[#a2aabc] text-lg mt-5">
              <code style = {{fontfamily: 'Courier New'}}>
                <div>
                  <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}>
                  1. Personal Website</code>: JavaScript, HTML, CSS, ReactJS, TailwindCSS
                </div>

                <div>
                  <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}>
                  2. Music Center Management Website </code>: JavaScript, HTML, CSS, ReactJS
                  <a target='_blank' href="http://103.130.212.35:1289/TTNhac/auth/login/">
                    <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
                      {/* <img
                        src={JSIcon}
                        alt="JS Icon"
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                      /> */}
                      <p>Music Center Management</p>
                    </div>
                  </a>
                </div>

                <div>
                  <code style = {{fontfamily: 'Courier New', fontWeight: 'bold', fontStyle: 'italic'}}>
                  3. NewsNewsNews </code>: FastAPI, Python, Firebase, ReactJS, JavaScript, HTML, CSS (ongoing)
                </div>

              </code>
            </div>
              
            </div>
            <br /><br />
          </div>
    );
}