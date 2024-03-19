import Modal from "@/components/core/Modal";
import { getData } from "@/services/projects";
export default async function DetailProjectPage(props: any) {
  const { params } = props;
  const projects = await getData(
    "http://localhost:3000/api/projects/?id=" + params.id
  );
  console.log(projects);
  return (
    <Modal>
      <div className="grid grid-cols-2 border p-2 md:grid-cols-2 sm:grid-cols-1 vsm:grid-cols-1">
        <div>
          <img src={projects.data.image} alt="" />
        </div>
        <div className="bg-white p-4 px-6 border ml-2 shadow-inherit">
          <div className="border py-2 text-center">
            <h3 className="text-base uppercase">{projects.data.title}</h3>
          </div>
          <div className="border text-justify mt-2">
            <p>{projects.data.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
