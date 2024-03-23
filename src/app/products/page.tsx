'use client';
import Image from "next/image";
import Link from "next/link";
// import { getData } from "@/services/products";
import useSWR from "swr";

type ProductsPageProps = {
  params: {
    slug: string[];
  };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage(props: ProductsPageProps) {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
    fetcher,
  );
  console.log(data)

  const products = {
    data: data?.data || [],
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-center content-center py-3 w-full">
        {products.data?.length > 0 &&
          products.data?.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/detail/${product.id}`}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Image
                className="object-cover h-auto w-full"
                src={product.image}
                alt="products image"
                width={500}
                height={500}
                loading="lazy"
              />
              <div className="px-2 pb-2 rounded-lg">
                <h5 className="text-lg tracking-tight text-dark dark:text-white truncate text-center">
                  {product.title}
                </h5>

                <button
                  type="button"
                  className="inline-flex items-center mt-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
