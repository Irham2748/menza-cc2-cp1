import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Capuccino Coffe",
    image: "/images/products/1.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tag: ["", ""],
  },
  {
    id: 2,
    title: "Cinnamon Coffe",
    image: "/images/products/2.png",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Strawberry Mojito",
    image: "https://media.istockphoto.com/id/1157873069/photo/fresh-lemonade-with-ice-mint-and-strawberry-on-top-in-glass-on-black-table-background-copy.webp?b=1&s=170667a&w=0&k=20&c=IL8kIYPVt0-3O702yJwJaSNH3Kjrm3RGRzj9Yq2KUPw=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Americano",
    image: "https://media.istockphoto.com/id/1359781504/photo/sweet-coffee-aroma-coffee-beans-and-morning-coffee.webp?b=1&s=170667a&w=0&k=20&c=gsb3a2YXO6cqViIbEAGVevgHnhAa9epopoS9WR_STOc=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Mojito",
    image: "https://media.istockphoto.com/id/1164929603/photo/fresh-mojito-cocktail-with-lime-and-mint-in-glass-on-concrete-background-cold-refreshing-drink.webp?b=1&s=170667a&w=0&k=20&c=uXBSg2DIc_GGiUSwoLzEtXgQEka7HdnEBlRjcOdI_Lw=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Cold Brew",
    image: "https://media.istockphoto.com/id/1209718260/photo/cold-brew-coffee-with-milk-and-ice-cubes-in-glass.webp?b=1&s=170667a&w=0&k=20&c=29_tq_7fMxyuUfZWtQimejkq513xgDe-8PDy9lrx5CM=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "Affogato",
    image: "https://media.istockphoto.com/id/476824782/photo/coffee-latte.webp?b=1&s=170667a&w=0&k=20&c=uPNvWOLa2nYAAQJbxoSZiRxNWuBxBV7mYU3TY5IKdB4=",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "Expresso",
    image: "/images/products/3.png",
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
