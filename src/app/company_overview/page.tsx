'use client'
import { getData } from "@/services/company_overview";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default async function CompanyOverview() {
  const router = useRouter()
  const personals = await getData(
    "http://localhost:3000/api/personal_overview"
  );
  console.log(personals);
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {personals.data.length > 0 &&
          personals.data.map((personal: any) => (
            <div key={personal.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-2xl hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72 vsm:mt-10">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={personal.image}
                  alt="personal"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {personal.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {personal.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
