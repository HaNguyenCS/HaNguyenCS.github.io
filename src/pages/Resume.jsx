import React, { useState, useEffect, useRef } from "react";
import { DocumentIcon } from "@heroicons/react/solid";
import { Document, Page, pdfjs } from 'react-pdf';
import myResume from './Ha Nguyen Software Dev resume.pdf'
import {Viewer, Worker} from '@react-pdf-viewer/core'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

// import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
export default function Resume() {
  const [numPage, setNumPage] = useState(0)
  const container = useRef(null);
  const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  useEffect(() => {
    // setWidth(container.current.clientWidth);
    // setHeight(container.current.clientHeight);

  }, []);
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

    return (
        <div
          id="resume"
          //mt: margin top; mx: horizontal margin (mx-size)
          className="mx-12 mt-60 lg:mx-60 items-center justify-center text-justify"
        >
          <div>
            <div className="table">
              <DocumentIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
              <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                Resume
              </code>
              <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
            </div>

            <div className="text-[#a2aabc] text-lg mt-5 ">
              <div
                  className="rpv-core__viewer"
                  style={{
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                  }}
              >
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#eeeeee',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        padding: '4px',
                    }}
                >
                    <Toolbar />
                </div>
                <div style={{overflow:'hidden'}}>
                  <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={myResume} plugins={[toolbarPluginInstance]}></Viewer>
                  </Worker>
                </div>
              </div>
              <a
                href={myResume}
                download="Ha Nguyen Software Dev Resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs ">
                  DOWNLOAD ME!!! &nbsp;
                  <i className='pi  pi-download'> </i>
                </button>
              </a>
            </div>

            <br /><br />

          </div>
      </div>
    )
}