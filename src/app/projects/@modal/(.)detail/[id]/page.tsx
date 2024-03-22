import { getData } from "@/services/products";
import Image from "next/image";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import('@/components/core/Modal'))

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const products = await getData(
    "http://localhost:3000/api/projects/?id=" + params.id
  );
  console.log(products);
  return (
    <Modal>
      <div className="flex flex-wrap w-full h-full">
        <Image
          className="w-full"
          width={300}
          height={300}
          src={products.data.image}
          alt="detail"
          loading="lazy"
        />
        <h3 className="text-base w-full uppercase text-center bg-dark text-white">
          {products.data.title}
        </h3>
        <p className="text-justify">{products.data.description}</p>
      </div>
    </Modal>
  );
}
