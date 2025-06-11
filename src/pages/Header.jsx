import React from "react";     
import 'primeicons/primeicons.css';

function Header() {
  // pt: padding top; pl: padding left, pr: padding right
    return (
      <div id="Header" className="mx-12 lg:mx-60 pt-60 px-0.1 items-center justify-center lg:w-1/2 text-justify">
        <div className="flex flex-col">
          <code className="text-lightblue_vs">Nice to meet you, my name is</code>
          <p className=" ">
          <code className="text-[#e6f1ff] text-7xl text-justify ">Ha Nguyen
          </code>
          </p>
      </div>
  
        <code>
        <a rel="nofollow" href="https://www.linkedin.com/in/nguyen-thanh-ha-a20925224/" target="_blank">
          <button
          className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
          >
            Check out my Linkedin! &nbsp;
            <i className='pi pi-linkedin'> </i>
          </button>
        </a>
        </code>

        {/* <br/> */} 
        &nbsp;

        <code>
          <a rel="nofollow" href="https://github.com/HaNguyenCS/" target="_blank">
            <button
            className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
            >
              Check out my GitHub! &nbsp;
              <i className='pi  pi-github'> </i>
            </button>
          </a>
        </code>

        <br/>

        <code>
          <a rel="nofollow" href="mailto:nguyen.thanhhaa1909@gmail.com" target="_blank">
            <button
            className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
            >
              Email me! &nbsp;
              <i className='pi  pi-envelope'> </i>
            </button>
          </a>
      {/* &nbsp; */}
          {/* <a rel="nofollow" href="https://github.com/harhaarr/" target="_blank">
            <button
            className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
            >
              Check out my GitHub! &nbsp;
              <i className='pi  pi-github'> </i>
            </button>
          </a> */}
        </code>
  
      </div>
    );
  }
  
  export default Header;