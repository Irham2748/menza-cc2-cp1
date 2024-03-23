"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";

const Modal = dynamic(() => import("@/components/core/Modal"));

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProductPage(props: any) {
  const { params } = props;
  
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/?id= ${params.id}`,
    fetcher,
  );
  console.log(data)
  const products = {
    data: data?.data,
  };
  return (
    <Modal>
      <div className="flex flex-wrap w-full h-full">
        <Image
          className="w-full"
          width={300}
          height={300}
          src={products.data?.image}
          alt="detail"
          loading="lazy"
        />
        <h3 className="text-base w-full uppercase text-center bg-dark text-white">
          {products.data?.title}
        </h3>
        <p className="text-justify">{products.data?.description}</p>
      </div>
    </Modal>
  );
}
