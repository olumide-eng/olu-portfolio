import aboutSvg from "../assets/about.png";
import SectionTitle from "./SectionTitle";

import React from "react";

const About = () => {
  return (
    <section className="bg-white py-10" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16"></div>
      <div className="w-96 mx-auto h-auto mb-8">
        <img
          src={aboutSvg}
          className="w-full"
          style={{ borderRadius: "50%" }}
        />
      </div>

      <article className="align-element">
        <SectionTitle text="About me" />
        <p className="text-slate-500 mt-8 leading-loose">
          Highly skilled and driven software engineer with a distinction in
          software engineering from the University of Bedfordshire. Proficient
          in full-stack JavaScript development, with a strong background in both
          front-end and back-end technologies. Experienced in building web
          applications and knowledgeable in AWS and Azure cloud computing.
          Committed to delivering value to customers through software
          engineering.
        </p>
      </article>
    </section>
  );
};

export default About;
