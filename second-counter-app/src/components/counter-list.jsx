import Counter from "./counter";

const CounterList = ({ list }) => {
  return (
    <div>
      {console.log(list)}

      {list.map((el, index) => (
        <Counter name={el.name} color={el.color} />
      ))}
    </div>
  );
};

export default CounterList;
