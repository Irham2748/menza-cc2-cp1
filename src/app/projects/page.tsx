import Image from "next/image";
import Link from "next/link";
import { getData } from "@/services/products";

type ProductsPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProjectPage(props: ProductsPageProps) {
  const projects = await getData("http://localhost:3000/api/projects");
  console.log(projects);
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-wrap gap-4 justify-center content-center py-3 w-full">
        {projects.data.length > 0 &&
          projects.data.map((project: any) => (
            <Link
              key={project.id}
              href={`/projects/detail/${project.id}`}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <Image
                className="object-cover h-auto w-full"
                src={project.image}
                alt="products image"
                width={500}
                height={500}
              />
              <div className="px-2 pb-2 rounded-lg">
                <h5 className="text-lg tracking-tight text-dark dark:text-white truncate text-center">
                  {project.title}
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
