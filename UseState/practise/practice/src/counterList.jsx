import Counter from "./counter";

const CounterList = ({ list }) => {
  return (
    <div>
      <h2>Counter List</h2>
      {list.map((el, ind) => {
        return <Counter key={ind} name={el.name} color={el.color} />;
      })}
    </div>
  );
};

export default CounterList;
