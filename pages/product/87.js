const Product87 = () => {
  const arr = [1, 2, 3];
  return (
    <>
      <h1>You are 87</h1>
      <span>
        {arr.map((number) => {
          return <>{number}</>;
        })}
      </span>
    </>
  );
};

export default Product87;
