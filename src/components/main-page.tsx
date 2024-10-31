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
  <div className="relative w-full rounded-lg flex flex-col items-center justify-between h-fit gap-5 group cursor-pointer ">
    <Link
      href={`https://${website}`}
      className="w-full h-40 max-md:h-32 bg-gray-100 flex justify-center items-center rounded-xl py-5 relative group-hover:bg-app-blue-70 transition-bg duration-300"
    >
      <Image
        src={logo}
        width={400}
        height={300}
        alt={name}
        objectFit="contain"
        className="h-full w-fit bg-contain group-hover:opacity-30 transition-opacity duration-300"
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <IoMdOpen className="text-4xl text-app-blue" />
      </div>
    </Link>

    <Link
      href={`https://${website}`}
      className="text-xl font-medium text-app-blue underline decoration-1 flex items-center gap-2 z-10"
    >
      {website}
      <IoMdOpen />
    </Link>
  </div>
);

const BigCompagnyCard = ({
  children,
  title,
}: {
  children: React.ReactElement<string, string>;
  title: string;
}) => {
  return (
    <div className="flex-1 min-w-[350px] flex flex-col gap-10">
      <div className="flex-1 bg-gray-800 text-white text-center py-2 px-4 mx-1">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};

const CompanyList: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap max-md:grid-cols-1 gap-10">
        <BigCompagnyCard title="MINING">
          <CompanyCard
            {...{
              category: "MINING",
              name: "ZIBO MINING",
              logo: zibo,
              website: "zibomines.com",
              description: "SARL",
            }}
          />
        </BigCompagnyCard>
        <BigCompagnyCard title="SPECIALIZED SECURITY">
          <CompanyCard
            {...{
              category: "SPECIALIZED SECURITY",
              name: "PARADIGMA",
              logo: paradigma,
              website: "para-digma.com/index-mobile.html",
              description: "Limited",
            }}
          />
        </BigCompagnyCard>
        <BigCompagnyCard title="BIOMETRICS">
          <CompanyCard
            {...{
              category: "BIOMETRICS",
              name: "SYCAMORE",
              logo: sycamore,
              website: "biosyc.com",
            }}
          />
        </BigCompagnyCard>

        <BigCompagnyCard title="FINTECH">
          <CompanyCard
            {...{
              category: "BIOMETRICS + FINTECH",
              name: "Easypay",
              logo: easypay,
              website: "easypay.co.ug",
              description: "Mobile Money Wallet",
            }}
          />
        </BigCompagnyCard>
      </div>
    </div>
  );
};

export default CompanyList;
