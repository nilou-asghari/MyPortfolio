"use client";

import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900  dark:text-amber-50">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Markazi-Text">Niloufar Asghari</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setdarkMode(!darkMode)}
                  className="text-xl cursor-pointer"
                />
              </li>
              <li>
                <a
                  className="px-4 py-2 ml-8 bg-gradient-to-r from-cyan-600 to-teal-500 text-white rounded-sm"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10  dark:text-amber-50">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Niloufar Asghari
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front End Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto  dark:text-amber-50">
              I’m a passionate Frontend Developer based in Germany, with a
              strong focus on building dynamic and user-friendly web
              applications. With a background in React, JavaScript, and modern
              web technologies, I love crafting clean, efficient, and scalable
              solutions. Driven by curiosity and continuous learning, I’m always
              exploring new ways to enhance user experiences and bring ideas to
              life through code. Let’s connect and create something amazing!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <FaGithub />
          </div>
          <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96 ">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className=" dark:text-amber-50 text-md py-5 leading-8 text-gray-800 ">
              Since the beginning of my journey as a developer, I've been
              involved in many projects, ranging from{" "}
              <span className="text-teal-500">
                building interactive web applications
              </span>{" "}
              to crafting{" "}
              <span className="text-teal-500">visually appealing</span> and{" "}
              <span className="text-teal-500">
                user-friendly interfacess applications
              </span>
              , and digital platforms, ensuring{" "}
              <span className="text-teal-500">seamless user experiences</span>{" "}
              through thoughtful design and clean,{" "}
              <span className="text-teal-500">efficient code</span>. I
              specialize in <span className="text-teal-500">React</span>,{" "}
              <span className="text-teal-500">JavaScript</span>, and{" "}
              <span className="text-teal-500">Drupal</span>, combining technical
              expertise with a keen eye for design to create intuitive,
              engaging, and responsive web solutions. Passionate about{" "}
              <span className="text-teal-500">modern web aesthetics</span> and{" "}
              <span className="text-teal-500">user-centric development</span>, I
              constantly explore new trends and best practices to refine my
              craft.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-900">
              <Image
                src={design}
                width={100}
                height={100}
                className="block mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Beutiful Designs
              </h3>
              <p className=" py-2 font-medium dark:text-amber-50">
                Creating elegant designs tailored to your needs while staying
                true to core design principles.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-amber-50">Figma</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-900">
              <Image
                src={code}
                width={100}
                height={100}
                className="block mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Beutiful Designs
              </h3>
              <p className="py-2 font-medium">
                Creating elegant designs tailored to your needs while staying
                true to core design principles.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-amber-50">Figma</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-900">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="block mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Beutiful Designs
              </h3>
              <p className="py-2 font-medium">
                Creating elegant designs tailored to your needs while staying
                true to core design principles.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-amber-50">Figma</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-amber-50">Adobe XD</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-amber-50 ">
              Since the beginning of my journey as a developer, I've been
              involved in many projects, ranging from{" "}
              <span className="text-teal-500">
                building interactive web applications
              </span>{" "}
              to crafting{" "}
              <span className="text-teal-500">visually appealing</span> and{" "}
              <span className="text-teal-500">
                user-friendly interfacess applications
              </span>
              , and digital platforms, ensuring{" "}
              <span className="text-teal-500">seamless user experiences</span>{" "}
              through thoughtful design and clean,{" "}
              <span className="text-teal-500">efficient code</span>. I
              specialize in <span className="text-teal-500">React</span>,{" "}
              <span className="text-teal-500">JavaScript</span>, and{" "}
              <span className="text-teal-500">Drupal</span>, combining technical
              expertise with a keen eye for design to create intuitive,
              engaging, and responsive web solutions. Passionate about{" "}
              <span className="text-teal-500">modern web aesthetics</span> and{" "}
              <span className="text-teal-500">user-centric development</span>, I
              constantly explore new trends and best practices to refine my
              craft.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3  flex-1 relative h-100">
              <Image src={web1} className="rounded-lg object-cover" fill />
            </div>
            <div className="basis-1/3 flex-1 relative h-100">
              <Image src={web2} className="rounded-lg object-cover" fill />
            </div>
            <div className="basis-1/3 flex-1 relative h-100">
              <Image src={web3} className="rounded-lg object-cover" fill />
            </div>
            <div className="basis-1/3 flex-1 relative h-100">
              <Image src={web4} className="rounded-lg object-cover" fill />
            </div>
            <div className="basis-1/3 flex-1 relative h-100">
              <Image src={web5} className="rounded-lg object-cover" fill />
            </div>
            <div className="basis-1/3 flex-1 relative h-100">
              <Image src={web6} className="rounded-lg object-cover" fill />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
