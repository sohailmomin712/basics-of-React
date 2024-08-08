import Counter from "./counter";

// eslint-disable-next-line react/prop-types
const CounterList = ({userData}) => {

  console.log(userData)
  return (
    <div>
      {userData?.map((el, index) => (
        <Counter key={index} name={el.name} color={el.color} />
      ))}
    </div>
  );
};

export default CounterList;
