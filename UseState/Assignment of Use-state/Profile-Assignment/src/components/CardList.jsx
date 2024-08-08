import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpeg";
import Card from "../Card";

const CardList = () => {
  const userArr = [
    {
      image: one,
      name: "Aazim",
      skills: ["HTML", "CSS", "REACT"],
      isRounded: true,
    },
    {
      image: two,
      name: "Sufiyan",
      skills: ["HTML", "NODE", "CLOUD"],
      isRounded: true,
    },
    {
      image: three,
      name: "Sohail",
      skills: ["JAVA", "PYTHON", "JQUERY"],
      isRounded: false,
    },
  ];

  return (
    <div className="card-list">
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
