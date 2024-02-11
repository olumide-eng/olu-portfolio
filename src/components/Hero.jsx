import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import React from "react";

const Hero = () => {
  return (
    <div className="bg-cyan-200 py-28">
      <div className="align-element grid md:grid-cols-2 item-center gap-8">
        <article>
          <h1 className="text-7xl front-bold tracking-wider "> I'm Olu</h1>
          <p className="mt-4 text-3xl text-slate-600 capitalize tracking-wide">
            Software Developer
          </p>
          <p className="mt-2 text-lg text-slate-500 capitalize tracking-wider">
            Turning ideas into responsive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/olumide-eng" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-400 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/olumide-ilo-146167150/"
              target="_blank"
            >
              <FaLinkedin
                className="h-8 w-8 text-slate-400 hover:text-black duration-300"
                target="_blank"
              />
            </a>
            <a href="https://twitter.com/IloOlumide" target="_blank">
              <FaTwitterSquare className="h-8 w-8 text-slate-400 hover:text-black duration-300" />
            </a>
          </div>
          <a
            href="https://resumeolu.s3.eu-west-2.amazonaws.com/ILO-OLUMIDE-2024-RESUME+copy.pdf"
            target="_blank"
          >
            <button className="bd-transparent hover:bg-blue-300 text-slate-600 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded mt-4">
              Resume
            </button>
          </a>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
