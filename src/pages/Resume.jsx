import React from "react";
import { DocumentIcon } from "@heroicons/react/solid";


export default function Resume() {
    return (
        <div
          id="resume"
          //mt: margin top; mx: horizontal margin (mx-size)
          className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
        >
          <div>
            <div className="table">
              <DocumentIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
              <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                Resume
              </code>
              <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5">
                
            </div>
            <br /><br />
          </div>
      </div>
    )
}