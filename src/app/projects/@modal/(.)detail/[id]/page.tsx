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
      <div className="grid grid-cols-2">
        <div>
          <img src={projects.data.image} alt="" />
        </div>
        <div className="bg-white p-4 px-6 border-2 border-red-700">
          <div className="border-2 border-orange-700 text-center">
            <h3>{projects.data.title}</h3>
          </div>
          <div>
            <p>{projects.data.description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
