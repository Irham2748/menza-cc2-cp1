import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Park Sensor With Blynk",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0f6d2a-62c3-47c0-8272-57bde95ca6c8/killshot-2-leather-shoes-DqWZ4j.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Internet of Things",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Portfolio",
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
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
