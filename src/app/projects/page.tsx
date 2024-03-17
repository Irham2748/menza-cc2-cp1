import Image from "next/image";
import Link from "next/link";
import { getData } from "@/services/projects";

type ProjectsPageProps = {
  params: {
    slug: string[];
  };
};

export default async function ProjectPage(props: ProjectsPageProps) {
  const { params } = props;
  const projects = await getData("http://localhost:3000/api/projects");
  console.log(projects);
  return (
    <div className="grid lg:grid-cols-3 mt-5 place-items-center sm:grid-cols-2 vsm:grid-cols-1">
      {projects.data.length > 0 &&
        projects.data.map((project: any) => (
          <Link
            href={`/projects/detail/${project.id}`}
            key={project.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2"
          >
            <img
              className="rounded-t-lg object-cover h-96 w-full"
              src={project.image}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                {project.title}
              </h5>

              <button
                type="button"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
      {params.slug && (
        <>
          <p>id : {params.slug[0]}</p>
          <p>Category: {params.slug[1]}</p>
          <p>Name: {params.slug[2]}</p>
          <p>description: {params.slug[3]}</p>
        </>
      )}
    </div>
  );
}
