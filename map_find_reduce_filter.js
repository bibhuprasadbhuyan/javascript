let arr = [
  {
    id: 1,
    body: "First Item",
    severity: 1,
    status: 0,
  },
  {
    id: 2,
    body: "Second Item",
    severity: 2,
    status: 1,
  },
  {
    id: 2,
    body: "Third Item",
    severity: 2,
    status: 1,
  },
];

//Map
let mappedArra = arr.map((a) => {
  return { ...a,body:a.body+'y' };
});

console.log(mappedArra);

//filter

let filteredarray = arr.filter((a) => {
  return a.severity === 2;
}, 5);

// console.log(filteredarray);

//find

let findVal = arr.find((a) => {
  return a.severity === 1;
});

// console.log(findVal);

//reduce

let reducedVal = arr.reduce((acc, val) => {
  return {...acc,[val.body]:val.severity}
}, {})

// console.log(reducedVal);
