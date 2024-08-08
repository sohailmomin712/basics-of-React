import { useState } from "react";

const Card = ({ name, image, skills, rounded }) => {
  
  const [isFollowed, setIsFollowed] = useState(false);

  const SayHello = () => {
    // return alert("followed to" + " " + name)
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      return alert(`UnFollowed to ${name}`);
    } else {
      return alert(`Followed to ${name}`);
    }
  };

  return (
    <div className="gradient-box">
      <div className="card">
        <div>
          <img
            src={image}
            alt={name}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: rounded ? "50%" : "0",
            }}
          />
          <h1 style={{ fontSize: "20px" }}>{name}</h1>
        </div>

        <div>
          <ul>
            {skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <button onClick={SayHello}>
          {isFollowed ? "unfollow" : "follow"}{" "}
        </button>
      </div>
    </div>
  );
};

export default Card;
