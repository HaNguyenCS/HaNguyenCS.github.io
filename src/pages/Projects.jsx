import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";

export default function Projects() {
    return (
      <div
          id="projects"
          //mt: margin top; mx: horizontal margin (mx-size)
          className="mx-12 mt-60 lg:mx-60 items-center justify-center text-justify"
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
              <p>Let's check out some of my projects!</p>
              <br/>

              <code style = {{fontfamily: 'Courier New'}}>
                <div>
                  <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Personal Website
                  </code>
                  <code style = {{fontfamily: 'Courier New', fontStyle: 'italic'}}>
                    JavaScript, HTML, CSS, ReactJS, TailwindCSS
                  </code>

                  <br/> <br/>

                  <div>
                    <a href="/">
                      <button
                        className="border border-lightblue_vs text-lightblue_vs  p-1.5 rounded hover:bg-opacity-10 hover:bg-lightblue_vs "
                        >
                          This website! &nbsp;
                          <i className='pi  pi-check'> </i>
                      </button>
                    </a>
                  </div>

                </div>

                <br/> <br/> <br/>

                <div>
                  <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Music Center Management Website
                  </code>
                  <code style = {{fontfamily: 'Courier New', fontStyle: 'italic'}}>
                    JavaScript, HTML, CSS, ReactJS
                  </code>

                  <br/>
                  <br/>

                  <div>
                    <a target='_blank' href="http://103.130.212.35:1289/TTNhac/auth/login/">
                      <button
                        className="border border-lightblue_vs text-lightblue_vs  p-1.5 rounded hover:bg-opacity-10 hover:bg-lightblue_vs "
                        >
                          Check it out! &nbsp;
                          <i className='pi  pi-check'> </i>
                      </button>
                    </a>
                    <p>
                      username: admin | password: 123456
                    </p>
                    <br/>
                    <p>
                    • A website is created for an admin to maintain a music center by managing students, teachers, classrooms, and types
                    of equipment.
                    </p>
                    <p>
                    • Integrated real-time features to update class schedules, enabling admins to create classes, manage classes’ status,
                    tuition, teachers’ salaries, and more
                    </p>
                  </div>


                </div>
                
                <br/> <br/> <br/>

                <div>
                  <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    NewsNewsNews (ongoing)
                  </code>
                  <code style = {{fontfamily: 'Courier New', fontStyle: 'italic'}}>
                    FastAPI, Python, Firebase, ReactJS, JavaScript, HTML, CSS
                  </code>
                </div>

              </code>
            </div>
              
            </div>
            <br /><br />
          </div>
    );
}