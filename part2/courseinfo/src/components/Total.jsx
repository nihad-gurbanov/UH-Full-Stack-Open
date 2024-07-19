const Total = ({ parts }) => {

  return (
    <h3>Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</h3>
  );
};

export default Total;
