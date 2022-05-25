let dob = new Date();
let name = document.getElementById('name');
let email = document.getElementById('email');
let date = document.getElementById('date');
const getIdade = (dob) => {
    let idade = dob.getFullYear() - date.getFullYear();
    if (dob.getMonth() < date.getMonth()) idade--;
    else if (dob.getMonth() == date.getMonth() && dob.getDate() < date.getDate)
        idade--;
    return idade;
};
