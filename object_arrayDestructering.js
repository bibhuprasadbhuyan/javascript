let sampleObject = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};


// const { isbn:date,author:{lastname,firstname},title,category,dsc = 'h how are you'} = sampleObject;


// console.log(date,lastname,title,dsc);
const { title, ...val } = sampleObject;
// console.log(val);

//array destructuring
let arr = ["Lordy", "Crown", "Roses","prena","shipu","divya"];

const [n, o, p,...other] = arr;
console.log(other);
