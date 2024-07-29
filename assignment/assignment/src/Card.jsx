const Card = ({ name, image, skills, rounded }) => {
  return (
    <div style={{
        display:"flex"
    }}>
      <img src={image} width={"100px"} />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
