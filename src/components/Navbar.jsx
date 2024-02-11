import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <div className="bg-cyan-900">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
        <h2 className="text-3xl front-bold">
          Olu<span className="text-cyan-700">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg text-amber-100 tracking-wide hover:text-amber-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
