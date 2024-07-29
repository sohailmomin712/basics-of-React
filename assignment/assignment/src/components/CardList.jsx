import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpeg";
import Card from "../Card";

const CardList = () => {
  const userArr = [
    {
      image: one,
      name: "azim",
      skills: ["HTML", "CSS", "REACT"],
      isRounded: true,
    },
    {
      image: two,
      name: "sufi",
      skills: ["HTML", "NODE", "JS"],
      isRounded: true,
    },
    {
      image: three,
      name: "sohail",
      skills: ["JAVA", "PYTHON", "JQUERY"],
      isRounded: false,
    },
  ];

  return (
    <div>
      {userArr.map((el, ind) => {
        return (
          <Card
            key={ind}
            name={el.name}
            image={el.image}
            skills={el.skills}
            rounded={el.isRounded}
          />
        );
      })}
    </div>
  );
};

export default CardList;
