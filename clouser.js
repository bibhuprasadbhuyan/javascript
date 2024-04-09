let clouserExample = (a) => {
  let b = 20;
  const innerFunction = () => {
    let sum = a + b;
    console.log(sum);
  };
  return innerFunction;
};

let clVal = clouserExample(30);

clVal()
