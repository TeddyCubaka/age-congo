import React from "react";
import zibo from "@/public/assets/zibo.png";
import paradigma from "@/public/assets/paradigma.png";
import easypay from "@/public/assets/easypay.png";
import sycamore from "@/public/assets/sycamore.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";

interface Company {
  category: string;
  name: string;
  logo: StaticImageData;
  website: string;
  description?: string;
}

const CompanyCard: React.FC<Company> = ({ name, logo, website }) => (
  <div className="w-full rounded-lg flex flex-col items-center justify-between h-fit gap-5">
    <div className="w-full h-40 max-md:h-32 bg-gray-100 flex justify-center items-center rounded-xl py-5">
      <Image
        src={logo}
        width={400}
        height={300}
        alt={name}
        objectFit="contain"
        className="h-full w-fit bg-contain"
      />
    </div>
    <Link
      href={`https://${website}`}
      // target="_blank"
      className="text-xl font-medium text-gray-600 underline decoration-1 flex items-center gap-2"
    >
      {website}
      <IoMdOpen />{" "}
    </Link>
  </div>
);

const CompanyList: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] max-md:grid-cols-1 gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex-1 bg-gray-800 text-white text-center py-2 px-4 mx-1">
            <h2 className="text-lg font-bold">MINIMG</h2>
          </div>
          <CompanyCard
            {...{
              category: "MINING",
              name: "ZIBO MINING",
              logo: zibo,
              website: "zibomines.com",
              description: "SARL",
            }}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex-1 bg-gray-800 text-white text-center py-2 px-4 mx-1">
            <h2 className="text-lg font-bold">SPECIALIZED SECURITY</h2>
          </div>
          <CompanyCard
            {...{
              category: "SPECIALIZED SECURITY",
              name: "PARADIGMA",
              logo: paradigma,
              website: "paradigma.com",
              description: "Limited",
            }}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex-1 bg-gray-800 text-white text-center py-2 px-4 mx-1">
            <h2 className="text-lg font-bold">BIOMETRICS</h2>
          </div>
          <CompanyCard
            {...{
              category: "BIOMETRICS + FINTECH",
              name: "SYCAMORE",
              logo: sycamore,
              website: "biosyc.com",
            }}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex-1 bg-gray-800 text-white text-center py-2 px-4 mx-1">
            <h2 className="text-lg font-bold">FINTECH</h2>
          </div>
          <CompanyCard
            {...{
              category: "BIOMETRICS + FINTECH",
              name: "Easypay",
              logo: easypay,
              website: "easypay.co.ug",
              description: "Mobile Money Wallet",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
