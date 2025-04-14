import React from 'react'
import profileImg from '../assets/img/IMG_6916.jpeg'
import resume from '../assets/Swagat_resume.pdf'
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 "
    >
      <div className="text-center z-10 px-4">
        <img
          className="w-[300px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all "
          src={profileImg}
          alt="Profile Image"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right ">
          I am Swagat Nandan Rout
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          I am a frontend developer who loves creation interactive, scalable web
          applications. My purpose is to build solutions that offer dynamic UI,
          high performance and delightful UX.
        </p>
        <div className='flex flex-col items-center text-gray-300 mb-8'>
            <h1 className='underline decoration-blue-500 decoration-2 p-3 font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-3xl'>
            Hobbies:-
            </h1>
        
            <ul>
                <li>
                    -Drawing
                </li>
                <li>
                    -Video Editing
                </li>
                <li>
                    -Cooking
                </li>
            </ul>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a
            className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1   hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden"
            href="mailto:snrout18@gmail.com"
          >
            Contact Me
          </a>
          <a
            className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden "
            href={resume}
            download
          >
            <p>Resume </p>
            <span className="h-5 ml-3 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home