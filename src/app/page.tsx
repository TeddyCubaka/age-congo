import CompanyList from "@/components/main-page";
import bg from "@/public/assets/new-york-city.jpg";
import Image from "next/image";
import AgeCongoLogo from "@/public/assets/logos/large-dark.png";

export default function Home() {
  return (
    <main className="h-[100svh] overflow-auto">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Calque sombre
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="p-5 h-[100vh] max-md:h-auto overflow-y-auto w-full flex flex-col justify-center items-center px-10">
        <Image
          alt="age-congo-logos"
          src={AgeCongoLogo}
          height={300}
          className="w-auto"
        />
        <CompanyList />
      </div>
    </main>
  );
}
