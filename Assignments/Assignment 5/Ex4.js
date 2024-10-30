const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

Promise.all([promise1, promise2]).then((values) => {
    const sum = values[0] + values[1];
    console.log("The sum is:", sum);
});
