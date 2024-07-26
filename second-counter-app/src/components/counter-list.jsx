import Counter from "./counter";

const CounterList = ({ list }) => {
  return (
    <div>
      {list?.map((el,index) => {
        return <Counter key={index} />;
      })}
    </div>
  );
};



export default CounterList;
