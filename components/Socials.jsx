import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/kevinparker727",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/kevin-parker-35ab4b148/",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:kevin.parker.727@gmail.com",
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconsStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
