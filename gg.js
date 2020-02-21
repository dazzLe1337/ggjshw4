let userName = prompt('Как вас зовут?')
let userData = +prompt('Введите ваш год рождения.');
let data = +prompt('Введите текущий год.');
function userAge(userData, data,userName) {
    let result = data - userData;
    let text = userName + ', Ваш возраст ' + result;
    return text;
}
let ans = userAge(userData, data, userName)
alert(ans);