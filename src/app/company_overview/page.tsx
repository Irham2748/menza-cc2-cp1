"use client";
// import { getData } from "@/services/company_overview";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function CompanyOverview() {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/company_overview`,
    fetcher,
  );
  console.log(data);
const companies = {
  data: data?.data || [],
}

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {companies.data?.length > 0 &&
          companies.data?.map((company: any) => (
            <div
              key={company.id}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow rounded-2xl hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72 vsm:mt-10">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={company.image}
                  alt="company"
                  width={500}
                  height={500}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  {company.title}
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {company.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
