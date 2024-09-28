import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto flex items-center justify-between border-t border-gray-500 py-4 max-w-7xl text-sm">
      <p>© 2024 Upperhill College. All rights reserved.</p>
      <ul className="flex space-x-5">
        <li className="list-none cursor-pointer hover:underline">Terms of Services</li>
        <li className="list-none cursor-pointer hover:underline">Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
