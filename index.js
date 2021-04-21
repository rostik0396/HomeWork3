var age = prompt('Уважаемый пользователь подскажите ваш возраст', '');

ageNumber = age;

if (ageNumber > 4 && ageNumber <=20) {

} else {
    ageNumber = ageNumber % 10;
}

if (ageNumber == 1) {
    alert('Так вам всего ' + age + ' год');
} else if (ageNumber >= 2 && ageNumber <=4) {
    alert('Так вам оказывается ' + age + ' года')
} else {
    alert('Ваш возраст ' + age + ' лет')
}