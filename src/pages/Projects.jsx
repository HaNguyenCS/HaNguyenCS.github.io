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

                {/* <div>
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
                    • Worked as a front-end developer in a team of 5 to implement JavaScript, HTML, and CSS, using React framework
                    to create a music center website for an admin to manage up to 200 students, teachers, classrooms, and types of
                    equipment.
                    </p>
                    <code>
                    • Integrated real-time features to update class schedules, enabling admins to create classes, and manage classes’
                    status, tuition, and teachers’ salaries, resulting in a time reduction of 70% of administrative tasks.
                    </code>
                  </div>


                </div> */}
                
                <br/> <br/>

                <div>
                  <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    The Dill Banh Mi
                  </code>
                  <code style = {{fontfamily: 'Courier New', fontStyle: 'italic'}}>
                     ReactJS, TypeScript, AWS, Material UI, , HTML, CSS
                  </code>

                  <br/>
                  <br/>

                  <div>
                    <a target='_blank' href="https://main.d2u3drbesgrpqx.amplifyapp.com/">
                      <button
                        className="border border-lightblue_vs text-lightblue_vs  p-1.5 rounded hover:bg-opacity-10 hover:bg-lightblue_vs "
                        >
                          Check it out! &nbsp;
                          <i className='pi  pi-check'> </i>
                      </button>
                    </a>
                    <br/>
                    <p>
                    • A serverless e-commerce web app using React, hosted on AWS Amplify, enabling customers to place orders for
                    Vietnamese banh mi and drinks through a modern, responsive UI.
                    </p>
                    <code>
                    • Developed an admin dashboard with protected REST endpoints (API Gateway + Lambda + JWT authorizer) to
                    perform CRUD operations on menu sections.
                    </code>
                  </div>

                </div>

              </code>
            </div>
              
            </div>
            <br /><br />
          </div>
    );
}