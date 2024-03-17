"use client";
import WhatsappButton from "@/components/Whatsapp";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="" className="py-10 px-6 sm:pt-5">
      <div className="container py-10">
        <div className="flex flex-wrap py-4">
          <div className="w-full self-center px-4 text-center lg:w-1/2 border p-5">
            <h1 className="font-bold text-2xl mb-5 text-primary">MUHAMMAD IRHAM</h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">
              I'm a Fullstack Web Developer Student at Purwadhika Technology
              School
            </h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
              illum recusandae quaerat quidem nulla vel voluptate accusantium
              veniam sint.
            </p>
              <WhatsappButton phoneNumber="6281275491652" message="" />
          </div>
          <div className="w-full self-end px-4 lg:w-1/2 py-10">
            <div className="relative my-auto lg:right-0">
              <Image
                className="max-w-full mx-auto rounded-full shadow-2xl shadow-dark"
                src={"/Foto1.png"}
                alt={"foto1"}
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
