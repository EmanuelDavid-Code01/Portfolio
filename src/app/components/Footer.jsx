import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#1dcffd] border-l-transparent border-r-transparent text-white z-10 ">
      <div className="justify-between container p-3">
        <span>
          <Image
            src="/images/channels4_profile.jpg"
            alt="ico"
            // layout="fixed"
            width={30}
            height={30}
          />
        </span>
      </div>
      <div className="justify-between container p-3 text-right">
        <p className="text-slate-600">Whatsapp<br className="block" /> 11-23410988</p>
      </div>
    </footer>
  );
};

export default Footer;
