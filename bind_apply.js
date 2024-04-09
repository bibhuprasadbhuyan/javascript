//call

let obj1 = {
  name: "bibhu",
  designation: "senior software engineer",
  fullDetails: function (experience) {
    console.log(
      `hi ${this.name} is ${this.designation} with ${experience} years of experience`
    );
  },
};
let obj3 = {
  name: "anil",
  designation: "softare engineer",
};

// obj1.fullDetails();
// obj1.fullDetails.call(obj3,5)

//Apply

// obj1.fullDetails.apply(obj3,[10])

//Bind

let bindval = obj1.fullDetails.bind(obj1,5);
bindval()