const num = [17, 43, 8, 4, 97, 56, 29];
const nums = num.forEach((number) => {
    if (number % 2 == 0) console.log(`Número par:${number}`);
    else if (number % 2 != 0) console.log(`Número impar:${number}`);
});

const num18 = num.filter((nums) => {
    return nums <= 18;
});
console.log(num18);
