// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
        if (j === 10) {
            console.log("");
        }
    }
}