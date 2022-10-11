import { Link, useParams } from "react-router-dom";
import Card from "../components /Card";

const Description = () => {
  const items = [
    {
      id: "1",
      title: "Leonardo Da Vinci",
      subtitle: "Lorem ipsum dolor sit",
      img: "http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic totam doloribus sint ullam odit aspernatur, eum nam cum excepturi aliquam tenetur quis laborum sed consectetur tempora ex. Quia quod soluta quibusdam rem iure delectus asperiores hic necessitatibus possimus excepturi.",
    },
    {
      id: "2",
      title: "Nicolaus Copernicus",
      subtitle: "Lorem ipsum dolor sit",
      img: "https://www.biography.com/.image/t_share/MTkyMzE2MDQwMjU0ODU4NDc2/nicolaus-copernicus-gettyimages-2747177.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic totam doloribus sint ullam odit aspernatur, eum nam cum excepturi aliquam tenetur quis laborum sed consectetur tempora ex. Quia quod soluta quibusdam rem iure delectus asperiores hic necessitatibus possimus excepturi.",
    },
    {
      id: "3",
      title: "Archimedes",
      subtitle: "Lorem ipsum dolor sit",
      img: "https://rawhistory.com/content/images/size/w2000/2021/01/Screen-Shot-2021-01-29-at-12.21.28-PM.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic totam doloribus sint ullam odit aspernatur, eum nam cum excepturi aliquam tenetur quis laborum sed consectetur tempora ex. Quia quod soluta quibusdam rem iure delectus asperiores hic necessitatibus possimus excepturi.",
    },
    {
      id: "4",
      title: "Nikola Tesla",
      subtitle: "Lorem ipsum dolor sit",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/220px-Tesla_circa_1890.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic totam doloribus sint ullam odit aspernatur, eum nam cum excepturi aliquam tenetur quis laborum sed consectetur tempora ex. Quia quod soluta quibusdam rem iure delectus asperiores hic necessitatibus possimus excepturi.",
    },
    {
      id: "5",
      title: "Thomas Edison",
      subtitle: "Lorem ipsum dolor sit",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/1200px-Thomas_Edison2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic totam doloribus sint ullam odit aspernatur, eum nam cum excepturi aliquam tenetur quis laborum sed consectetur tempora ex. Quia quod soluta quibusdam rem iure delectus asperiores hic necessitatibus possimus excepturi.",
    },
  ];

  type CompareId = {
    id: string;
  };
  const { id } = useParams<CompareId>();
  console.log(id);
  return (
    <div className="App">
      {" "}
      <img
        src="https://livelink.vip/images/livelink_logo_text.svg"
        alt="logo"
        style={{
          scale: "2",
          margin: "100px 0 50px 0",
        }}
      />
      <div
        className="cards-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {items.map(
          (item) =>
            id === item.id && (
              <Link key={item.id} to="/">
                <Card
                  subtitle={item.subtitle}
                  title={item.title}
                  img={item.img}
                  description={item.description}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Description;
