import Counter from "./Counter";

const CounterList = ({ list }) => {
  return (
    <div>
      <h2>Counter List</h2>
      {list?.map((el, idx) => {
        return <Counter key={idx} name={el.name} color={el.color} />;
      })}
    </div>
  );
};

export default CounterList;

{
  /* return <Counter key={idx} {...el}  /> */
}
{
  /* we can pass all object at once in props using spread */
}
