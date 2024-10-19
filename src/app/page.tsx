import CompanyList from "@/components/main-page";
import bg from "@/public/assets/bg_.jpg";

export default function Home() {
  return (
    <main className="min-h-[100svh] flex justify-center items-center px-10">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
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
      <CompanyList />
    </main>
  );
}
