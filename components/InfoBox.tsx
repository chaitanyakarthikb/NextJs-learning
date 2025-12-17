import Link from "next/link";
import React from "react";

type buttonInfo = {
  text: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
};
type InfoBoxPropTypes = {
  children: string;
  backgroundColor?: string;
  textColor?: string;
  heading: string;
  buttonInfo: buttonInfo;
};
const InfoBox = ({
  children,
  backgroundColor = "bg-gray-100",
  heading,
  textColor = "text-gray-800",
  buttonInfo,
}: InfoBoxPropTypes) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor || "bg-black"} ${
          buttonInfo.textColor || "text-white"
        } rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
