'use client';
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 h-lvh items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tempore quae totam. Magni officiis possimus amet! Vel doloremque repellendus hic vero voluptatum saepe fuga beatae placeat quos ab laboriosam libero dolores, excepturi sunt, quaerat ea provident numquam ad animi voluptate nesciunt rerum illo inventore? Ut obcaecati itaque nemo optio eum quod quam. Modi ullam numquam quae adipisci facere! Ipsam, consectetur.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod dicta ea animi dolore iure quos eos, dolorem exercitationem laudantium iusto? Porro natus aut ab quia eius animi deleniti vel.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image
            className="w-full rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"
            width={500}
            height={500}
            alt="office content 1"
            loading="lazy"
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.unsplash.com/photo-1536520002442-39764a41e987?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D"
            width={500}
            height={500}
            alt="office content 2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
