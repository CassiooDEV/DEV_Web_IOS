const i = () => {
    let c = 0;
    let tab = 1207;
    let i2 = 0;
    console.log('MÉTODO WHILE');
    while (c <= 10) {
        console.log(`O resultado de ${tab} x ${c} é : ${tab * c}`);
        c++;
    }
    console.log('MÉTODO FOR');
    for (let i = 0; i <= 10; i++) {
        console.log(`O resultado de ${tab} x ${i} é : ${tab * i}`);
    }
    console.log('MÉTODO DO-WHILE');
    do {
        console.log(`O resultado de ${tab} x ${i2} é : ${tab * i2}`);
        i2++;
    } while (i2 <= 10);
};
i();
