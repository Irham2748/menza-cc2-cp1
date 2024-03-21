import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";
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
            alt=""
          />
          <h3 className="text-base w-full uppercase text-center bg-dark text-white">{products.data.title}</h3>
          <p className="text-justify">{products.data.description}</p>
        
      </div>
    </Modal>
  );
}
