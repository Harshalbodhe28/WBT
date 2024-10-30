console.log("Program Started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);

  setTimeout(() => {
    resolve();
  }, 2000)
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
.then(() => {
    console.log("Program Complet");
})
.catch(() => {
    console.log("Program Failure");
});

