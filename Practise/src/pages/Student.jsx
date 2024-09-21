const Student = (data) => {
  console.log(data);
  return (
    <div>
      <h1>Name of the student is: {data. name}</h1>
      <h3>Email of the student is: {data. email}</h3>
      <h4>The address of the student is: {data.other.address}</h4>
      <h4>The mobile number of the student is: {data.other.mobile}</h4>
    </div>
  );
};

export default Student;
