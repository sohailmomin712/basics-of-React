const Card = ({ name, image, skills, rounded }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        textAlign: "center",
        alignItems: "center",
        border: "2px solid red",
      }}
    >
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

      <div
        style={{ border: "2px solid blue", height: "100px", width: "200px" }}
      >
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
