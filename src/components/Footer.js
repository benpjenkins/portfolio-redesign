import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-1/3 m-auto">
      <div className="flex flex-row items-center justify-between">
        <a href="https://github.com/benpjenkins">
          <FaGithub size="2em" />
        </a>
        <a href="https://www.linkedin.com/in/benpjenkins/">
          <FaLinkedin size="2em" />
        </a>
        <a href="https://twitter.com/benjenkinsdev">
          <FaTwitter size="2em" />
        </a>
      </div>
      <div className="flex justify-center"> ©{year}</div>
    </footer>
  );
};

export default Footer;
