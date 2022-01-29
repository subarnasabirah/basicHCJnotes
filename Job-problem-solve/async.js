async.js
const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed");
    });
};

const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed");
        }, 2000);  
    });
};

const taskThree = () => {
    return new Promise((resolve, reject) => {
        reject("task 3 is not completed");
    });
};
async function callAllTasks() {
    try {
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
    } catch (e) {
        console.log(e);
    } 
};
callAllTasks();