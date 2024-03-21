import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Our History",
    image : "https://images.pexels.com/photos/6248993/pexels-photo-6248993.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Our Culture",
    image: "https://images.pexels.com/photos/17864141/pexels-photo-17864141/free-photo-of-cup-of-cappuccino-and-plant.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Our Teams",
    image: "https://images.pexels.com/photos/13741471/pexels-photo-13741471.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProject = data.find((project) => project.id === Number(id));
    if (detailProject) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProject,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }
  return NextResponse.json({ status: 200, message: "Success", data });
}
