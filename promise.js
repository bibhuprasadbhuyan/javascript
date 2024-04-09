const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject(new Error('random umber is too low'));
    }
  }, 1000);
});
promise.then(val => {
  console.log(val);
}, (error) => {
  console.log(error);
})
  
